#!/usr/bin/env bash
# simulates the quality action's scripts locally, with no runner and no network:
# the conflict gate against a fake GitHub API, the change scope against a throwaway repository with a pull request stack,
# and the arguments run-test.sh hands pnpm
#
# usage: bash .github/actions/quality/spec/simulate.sh
# output: one line per case, then a summary; exits 1 when any case fails
set -euo pipefail

action="$(cd "$(dirname "$0")/.." && pwd)"
sandbox="$(mktemp -d "${TMPDIR:-/tmp}/quality-simulate.XXXXXX")"
trap 'rm -rf "$sandbox"' EXIT
mkdir -p "$sandbox/bin"
passed=0
failed=0

pass() {
  passed=$((passed + 1))
  echo "ok   $1"
}
fail() {
  failed=$((failed + 1))
  echo "FAIL $1"
  printf '     %s\n' "${@:2}"
}
# expect <case> <actual> <expected>
expect() { if [ "$2" = "$3" ]; then pass "$1"; else fail "$1" "expected: $3" "actual:   $2"; fi; }
# logged <case> <text>: the last gate run logged the text
logged() { if grep -qF -- "$2" "$log"; then pass "$1"; else fail "$1" "missing: $2" "$(cat "$log")"; fi; }
# unlogged <case> <text>: the last gate run never logged the text
unlogged() { if grep -qF -- "$2" "$log"; then fail "$1" "unexpected: $2" "$(cat "$log")"; else pass "$1"; fi; }
# requested <pattern>: how many requests of the last gate run hit a fixture key matching the pattern
requested() { if [ -f "$FIXTURES/requests" ]; then grep -c -- "$1" "$FIXTURES/requests" || true; else echo 0; fi; }
# output <name>: a single-line value the last run wrote to its GITHUB_OUTPUT
output() { sed -n "s/^$1=//p" "$GITHUB_OUTPUT"; }

# --- fakes --------------------------------------------------------------------------------------------------------

# curl answers from $FIXTURES: the API path, with every non-alphanumeric character as `_`, names a file whose first line
# is the HTTP status and the rest the body; `<name>.<n>` answers the n-th request for a path, for polling; a status of
# `curl-exit-<n>` makes curl itself fail with that exit code; request headers go to $FIXTURES/headers
cat > "$sandbox/bin/curl" << 'EOF'
#!/usr/bin/env bash
out=/dev/stdout
format=""
while [ $# -gt 0 ]; do
  case "$1" in
    -o) out="$2"; shift ;;
    -w) format="$2"; shift ;;
    -H) echo "$2" >> "$FIXTURES/headers"; shift ;;
    --max-time | --retry) shift ;;
    http*) url="$1" ;;
  esac
  shift
done
key=$(printf '%s' "${url#"$GITHUB_API_URL"}" | tr -c 'A-Za-z0-9' '_')
count=$(($(cat "$FIXTURES/$key.count" 2> /dev/null || echo 0) + 1))
echo "$count" > "$FIXTURES/$key.count"
echo "$key" >> "$FIXTURES/requests"
file="$FIXTURES/$key.$count"
[ -f "$file" ] || file="$FIXTURES/$key"
if [ -f "$file" ]; then status=$(head -n 1 "$file"); tail -n +2 "$file" > "$out"; else status=404; echo '{}' > "$out"; fi
case "$status" in curl-exit-*)
  echo "curl: simulated failure" >&2
  exit "${status#curl-exit-}"
  ;;
esac
[ -n "$format" ] && printf '%s' "${format//'%{http_code}'/$status}"
exit 0
EOF

# pnpm records its arguments, one per line, so the simulation sees exactly what a script would receive
cat > "$sandbox/bin/pnpm" << 'EOF'
#!/usr/bin/env bash
printf '%s\n' "$@" > "$PNPM_ARGS"
EOF
chmod +x "$sandbox/bin/curl" "$sandbox/bin/pnpm"

# --- conflict gate ------------------------------------------------------------------------------------------------

export GITHUB_API_URL=https://api.github.test GITHUB_REPOSITORY=owner/repo GITHUB_REPOSITORY_OWNER=owner
# a distinctive token, so a leak into any log is found
export DEFAULT_BRANCH=main GH_TOKEN=ghs_simulatedSecretToken0123456789 POLL_ATTEMPTS=3 POLL_DELAY=0

# route <path> <status> <body> [<request number>]
route() {
  local key
  key=$(printf '%s' "$1" | tr -c 'A-Za-z0-9' '_')
  printf '%s\n%s\n' "$2" "$3" > "$FIXTURES/$key${4:+.$4}"
}
# pull <number> <head> <base> <mergeable> [<request number>]
pull() {
  route "/repos/owner/repo/pulls/$1" 200 \
    "{\"number\":$1,\"html_url\":\"https://github.test/owner/repo/pull/$1\",\"head\":{\"ref\":\"$2\"},\"base\":{\"ref\":\"$3\"},\"mergeable\":$4}" "${5:-}"
}
# heads <branch> [<number>...]: the open pull requests whose head is the branch
heads() {
  local head
  head=$(jq -rn --arg head "owner:$1" '$head | @uri')
  route "/repos/owner/repo/pulls?state=open&head=$head&per_page=2" 200 "$(jq -cn '$ARGS.positional | map({number: tonumber})' --args "${@:2}")"
}
# gate [<env>...]: runs the gate for PR_NUMBER into $log with the given environment, keeping its status
gate() {
  export GITHUB_OUTPUT="$FIXTURES/output"
  : > "$GITHUB_OUTPUT"
  status=0
  env PATH="$sandbox/bin:$PATH" "$@" bash "$action/conflict-gate.sh" > "$log" 2>&1 || status=$?
}
fresh() {
  export FIXTURES="$sandbox/api-$1"
  mkdir -p "$FIXTURES"
  log="$FIXTURES/log"
}

fresh standalone
export PR_NUMBER=10
pull 10 feat main true
gate
expect "gate: a standalone pull request that merges passes, targeting its base" "$status $(output target)" "0 main"

fresh conflict
pull 10 feat main false
gate
expect "gate: a conflicting pull request fails" "$status" "1"
logged "gate: the error names the conflicting pull request" '::error::https://github.test/owner/repo/pull/10 conflicts'

fresh stack
export PR_NUMBER=12
pull 12 feat-c feat-b true
heads feat-b 11
pull 11 feat-b feat-a true
heads feat-a 10
pull 10 feat-a main true
gate
expect "gate: a three-layer stack that merges passes, targeting the lowest base" "$status $(output target)" "0 main"

fresh stack-conflict
pull 12 feat-c feat-b true
heads feat-b 11
pull 11 feat-b feat-a false
gate
expect "gate: a stack whose middle layer conflicts fails" "$status $(output target)" "1 "
logged "gate: the error names the conflicting layer" '::error::https://github.test/owner/repo/pull/11 conflicts with its base feat-a'

fresh release-branch
export PR_NUMBER=20
pull 20 fix release/1.x true
heads release/1.x
gate
expect "gate: a base that no open pull request heads ends the walk" "$status $(output target)" "0 release/1.x"

fresh polling
export PR_NUMBER=10
pull 10 feat main null 1
pull 10 feat main null 2
pull 10 feat main false 3
gate
expect "gate: a conflict found after GitHub finishes computing fails" "$status $(grep -c pulls_10 "$FIXTURES/requests")" "1 3"

fresh unknown
pull 10 feat main null
gate
expect "gate: mergeability that stays unknown warns and passes" "$status $(output target) $(grep -c '::warning::' "$log")" "0 main 1"

fresh forbidden
route /repos/owner/repo/pulls/10 403 '{"message":"Resource not accessible by integration"}'
gate
expect "gate: a 403 fails closed" "$status" "1"
logged "gate: the 403 error asks for pull-requests: read" 'pull-requests: read'
logged "gate: the 403 error carries the API's message" '(403: Resource not accessible by integration)'

fresh rate-limited
route /repos/owner/repo/pulls/10 403 '{"message":"API rate limit exceeded for installation ID 1."}'
gate
expect "gate: a rate-limited 403 fails closed" "$status" "1"
logged "gate: a rate-limited 403 is reported as a rate limit" 'rate-limited /repos/owner/repo/pulls/10 (403: API rate limit exceeded'
unlogged "gate: a rate-limited 403 never asks for a permission" 'pull-requests: read'

fresh server-error
route /repos/owner/repo/pulls/10 502 '{"message":"Server Error"}'
gate
expect "gate: a non-403 API error fails closed" "$status" "1"
logged "gate: a non-403 API error names its status and message" 'answered 502 for /repos/owner/repo/pulls/10 (Server Error)'

fresh curl-failure
route /repos/owner/repo/pulls/10 curl-exit-28 ''
gate
expect "gate: a curl failure fails closed" "$status" "1"
logged "gate: a curl failure names curl's exit code" 'could not be reached for /repos/owner/repo/pulls/10 (curl exit 28)'

fresh layer-forbidden
export PR_NUMBER=12
pull 12 feat-c feat-b true
route "/repos/owner/repo/pulls?state=open&head=owner%3Afeat-b&per_page=2" 403 '{}'
gate
expect "gate: a 403 during the stack walk fails closed" "$status" "1"

fresh ambiguous
pull 12 feat-c feat-b true
heads feat-b 11 13
gate
expect "gate: a branch that heads several open pull requests fails" "$status $(requested pulls_11)" "1 0"
logged "gate: the error names the ambiguous branch" 'more than one open pull request has feat-b as its head branch'

fresh cycle
pull 12 feat-x feat-y true
heads feat-y 13
pull 13 feat-y feat-x true
heads feat-x 12
gate
expect "gate: a stack that loops fails at once" "$status $(requested pulls_13)" "1 1"
logged "gate: the error names where the stack loops" 'loops back to #12 at feat-x'

# git flow: develop -> main is an open release pull request that conflicts, which must not refuse a feature pull request
fresh stop-branch
export PR_NUMBER=20
pull 20 feat develop true
heads develop 30
pull 30 develop main false
gate STACK_STOP_BRANCHES=$'release\r\ndevelop'
expect "gate: the walk stops at a listed branch, which becomes the target" "$status $(output target) $(requested pulls_30) $(requested develop)" "0 develop 0 0"

fresh gate-off
gate CONFLICT_GATE=false
expect "gate: a disabled gate passes without reading the API" "$status [$(output target)] $(requested pulls)" "0 [] 0"

sent=$(cat "$sandbox"/api-*/headers | grep -cF -- "Authorization: Bearer $GH_TOKEN" || true)
leaked=$(cat "$sandbox"/api-*/log | grep -cF -- "$GH_TOKEN" || true)
expect "gate: the token reaches the API, but never the log" "$([ "$sent" -gt 0 ] && echo sent) $leaked" "sent 0"

# --- change scope -------------------------------------------------------------------------------------------------

# a stack main <- feat-a <- feat-b, with HEAD at the merge of feat-b into feat-a, as refs/pull/N/merge checks it out
repo="$sandbox/repo"
git init -q --bare "$sandbox/origin.git"
git init -q -b main "$repo"
(
  cd "$repo"
  git config user.email simulate@example.com
  git config user.name simulate
  git config commit.gpgsign false
  commit() {
    mkdir -p "$(dirname "$1")"
    echo "$2" > "$1"
    git add "$1"
    git commit -q -m "$1"
  }
  commit README.md root
  commit pnpm-workspace.yaml workspace
  git remote add origin "$sandbox/origin.git"
  git switch -q -c feat-a
  commit src/a.ts a
  commit pnpm-lock.yaml lock
  git switch -q -c feat-b
  commit src/b.ts b
  commit src/c.ts c
  git switch -q main
  commit src/main.ts later
  # a pull request that only deletes a full-run path
  git switch -q -c delete-only
  git rm -q pnpm-workspace.yaml
  git commit -q -m 'delete pnpm-workspace.yaml'
  # a branch that shares no history with the stack
  git switch -q --orphan orphan
  commit unrelated.md unrelated
  git push -q origin main feat-a feat-b delete-only orphan
  git switch -q --detach feat-a
  git merge -q --no-ff -m merge feat-b
)

# scope <case-env...>: runs the change scope in $checkout (the stack repository by default) with the given environment
scope() {
  export GITHUB_OUTPUT="$sandbox/scope-output"
  : > "$GITHUB_OUTPUT"
  (cd "${checkout:-$repo}" && env "$@" bash "$action/change-scope.sh") > "$sandbox/scope-log" 2>&1
}
# scoped <case> <text>: the last scope run logged the text
scoped() { if grep -qF -- "$2" "$sandbox/scope-log"; then pass "$1"; else fail "$1" "missing: $2" "$(cat "$sandbox/scope-log")"; fi; }
rev() { git -C "$repo" rev-parse "$1"; }

scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=feat-a TARGET_REF=main FULL_RUN_PATHS=''
expect "scope: unit tests diff against the merge base with the pull request's base" "$(output unit-base)" "$(rev feat-a)"
expect "scope: integration tests diff against the merge base with the stack's target" "$(output integration-base)" "$(rev main~1)"
expect "scope: lint gets the pull request's own changed files" "$(sed -n '/^changed-files<</,/^ghadelim_/p' "$GITHUB_OUTPUT" | sed '1d;$d' | tr '\n' ' ')" "src/b.ts src/c.ts "

scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=feat-a TARGET_REF=main FULL_RUN_PATHS=pnpm-lock.yaml
expect "scope: a full-run path below this layer runs only integration tests in full" "$(output unit-base) [$(output integration-base)]" "$(rev feat-a) []"

scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=main TARGET_REF=main FULL_RUN_PATHS=pnpm-lock.yaml
expect "scope: a full-run path in this pull request runs everything in full" "$(wc -c < "$GITHUB_OUTPUT" | tr -d ' ')" "0"

scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=feat-a TARGET_REF='' FULL_RUN_PATHS=''
expect "scope: a standalone pull request scopes both runs to its base" "$(output integration-base)" "$(rev feat-a)"

git -C "$repo" update-ref -d refs/remotes/origin/main
scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=feat-a TARGET_REF=main FULL_RUN_PATHS=''
expect "scope: a missing target branch is fetched" "$(output integration-base)" "$(rev main~1)"

scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=feat-a TARGET_REF=orphan FULL_RUN_PATHS=''
expect "scope: no merge base with the target runs only integration tests in full" "$(output unit-base) [$(output integration-base)]" "$(rev feat-a) []"
scoped "scope: the notice names the missing merge base and why it may be missing" 'integration tests run in full: no merge base with orphan (shallow checkout, or a private repository checked out with persist-credentials: false'

git -C "$repo" worktree add -q --detach "$sandbox/delete-only" delete-only
checkout="$sandbox/delete-only" scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=main TARGET_REF='' FULL_RUN_PATHS=pnpm-workspace.yaml
expect "scope: deleting a full-run path runs everything in full" "$(wc -c < "$GITHUB_OUTPUT" | tr -d ' ')" "0"
scoped "scope: the notice names the deleted full-run path" 'full run: pnpm-workspace.yaml matches pnpm-workspace.yaml'

# a depth-1 checkout of feat-b: fetching feat-a alone reaches no merge base, so the scope must unshallow
git clone -q --depth 1 --branch feat-b "file://$sandbox/origin.git" "$sandbox/shallow"
checkout="$sandbox/shallow" scope CHANGED_ONLY=true EVENT=pull_request BASE_REF=feat-a TARGET_REF='' FULL_RUN_PATHS=''
expect "scope: a shallow checkout is unshallowed to reach the merge base" \
  "$(output unit-base) $(git -C "$sandbox/shallow" rev-parse --is-shallow-repository)" "$(rev feat-a) false"

scope CHANGED_ONLY=false EVENT=workflow_dispatch BASE_REF='' TARGET_REF='' FULL_RUN_PATHS=''
expect "scope: a manual dispatch runs in full" "$(wc -c < "$GITHUB_OUTPUT" | tr -d ' ') $(grep -c 'full run: workflow_dispatch event' "$sandbox/scope-log")" "0 1"

# --- run-test.sh arguments ----------------------------------------------------------------------------------------

export PNPM_ARGS="$sandbox/pnpm-args"
# run <env...>: the pnpm arguments run-test.sh builds, space-joined
run() {
  : > "$PNPM_ARGS"
  env -u CHANGED_SINCE -u CHANGED_FILES -u CHANGED_FILES_ARGS -u COVERAGE_ARGS -u ARGS PATH="$sandbox/bin:$PATH" "$@" \
    bash "$action/run-test.sh" > /dev/null
  tr '\n' ' ' < "$PNPM_ARGS"
}

# vitest derives coverage.changed from --changed only when the config leaves it unset, so the action passes it too
expect "args: a changed-only unit run with coverage scopes both to the same commit" \
  "$(run SCRIPT=test ARGS=--project=UNIT CHANGED_SINCE=abc123 COVERAGE_ARGS=--coverage)" \
  "run test -- --project=UNIT --changed abc123 --coverage --coverage.changed=abc123 "
expect "args: a full run passes no --changed" \
  "$(run SCRIPT=test COVERAGE_ARGS=--coverage)" \
  "run test -- --coverage "
expect "args: a changed-only run without coverage passes --changed alone" \
  "$(run SCRIPT=test:int CHANGED_SINCE=def456)" \
  "run test:int -- --changed def456 "
expect "args: a run with no arguments passes no --" \
  "$(run SCRIPT=test)" \
  "run test "
expect "args: lint gets the changed files, with a leading - guarded" \
  "$(run SCRIPT=lint ARGS=--fix CHANGED_FILES=$'src/a.ts\n-b.ts')" \
  "run lint -- src/a.ts ./-b.ts --fix "

echo
echo "$passed passed, $failed failed"
[ "$failed" -eq 0 ]

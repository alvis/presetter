#!/usr/bin/env bash
# refuses a pull request that conflicts with its base, or that sits on a stack layer that conflicts with its own base,
# and finds the branch the stack finally merges into
#
# input (env):
#   GH_TOKEN                  token for the GitHub API; needs `pull-requests: read`
#   PR_NUMBER                 the pull request this run tests
#   DEFAULT_BRANCH            repository default branch, where the stack walk always stops
#   STACK_STOP_BRANCHES       further branches, one per line, where the stack walk stops, e.g. a git-flow `develop`
#   CONFLICT_GATE             `false` turns the gate off: no API call, no conflict check and no stack target
#   GITHUB_API_URL            set by the runner
#   GITHUB_REPOSITORY         set by the runner, as <owner>/<repo>
#   GITHUB_REPOSITORY_OWNER   set by the runner
#   GITHUB_OUTPUT             set by the runner
#   POLL_ATTEMPTS             reads of a pull request while GitHub still computes `mergeable`; default 5
#   POLL_DELAY                seconds between those reads; default 3
# output: `target=<branch>` in $GITHUB_OUTPUT, the base where the stack walk stopped (a standalone pull request's own
#         base); exits 1 when a pull request in the stack conflicts, the stack is ambiguous or loops, or the API cannot
#         be read
set -euo pipefail

if [ "${CONFLICT_GATE:-true}" = false ]; then
  echo "conflict gate off: no pull request is checked, and integration tests scope to the base branch"
  exit 0
fi

# a stack deeper than this is a mistake
max_layers=20
attempts="${POLL_ATTEMPTS:-5}"
delay="${POLL_DELAY:-3}"

body="$(mktemp "${RUNNER_TEMP:-${TMPDIR:-/tmp}}/quality-gate.XXXXXX")"
trap 'rm -f "$body"' EXIT

# GET a GitHub API path into $body; any failure refuses the run, as an unread stack is not a checked one
api() {
  local status code=0 message
  status=$(curl -sSL --max-time 30 --retry 2 -o "$body" -w '%{http_code}' \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GH_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "$GITHUB_API_URL$1") || code=$?
  if [ "$code" -ne 0 ]; then
    echo "::error::the GitHub API could not be reached for $1 (curl exit $code), so the conflict gate cannot check the pull request stack"
    exit 1
  fi
  case "$status" in 2??) return ;; esac

  # the API's own reason tells a missing permission from a rate limit; strip control characters before it is logged
  message=$(jq -r '.message // empty' "$body" 2> /dev/null | tr -d '[:cntrl:]') || message=""
  message="${message:-no message}"
  case "$status:$message" in
    403:*[Rr]ate\ limit* | 429:*)
      echo "::error::the GitHub API rate-limited $1 ($status: $message); rerun the job once the limit resets"
      ;;
    403:*)
      echo "::error::the GitHub API refused $1 (403: $message); grant the calling job \`pull-requests: read\` so the conflict gate can read pull requests"
      ;;
    *)
      echo "::error::the GitHub API answered $status for $1 ($message), so the conflict gate cannot check the pull request stack"
      ;;
  esac
  exit 1
}

# read a pull request into url, base and mergeable, retrying while GitHub still computes mergeable (null)
read_pull() {
  local attempt
  for ((attempt = 1; attempt <= attempts; attempt++)); do
    api "/repos/$GITHUB_REPOSITORY/pulls/$1"
    mergeable=$(jq -r '.mergeable' "$body")
    if [ "$mergeable" != null ] || [ "$attempt" -ge "$attempts" ]; then break; fi
    sleep "$delay"
  done
  url=$(jq -r '.html_url' "$body")
  base=$(jq -r '.base.ref' "$body")
}

# refuse a conflicting pull request; an unknown result is not a known conflict, so it only warns
check_pull() {
  read_pull "$1"
  case "$mergeable" in
    true) echo "$url merges cleanly into $base" ;;
    false)
      echo "::error::$url conflicts with its base $base; resolve the conflict before tests run"
      exit 1
      ;;
    *) echo "::warning::GitHub has not computed whether $url conflicts with $base; continuing without that check" ;;
  esac
}

# succeed when the walk stops at a branch: the default branch or one listed in STACK_STOP_BRANCHES
is_stop() {
  local branch
  [ "$1" = "$DEFAULT_BRANCH" ] && return 0
  while read -r branch; do
    branch="${branch%$'\r'}"
    [ -n "$branch" ] && [ "$branch" = "$1" ] && return 0
  done <<< "${STACK_STOP_BRANCHES:-}"
  return 1
}

check_pull "$PR_NUMBER"
target="$base"
visited=" $PR_NUMBER "

# walk down the stack: while the base is another open pull request's head, that pull request is the layer below
layers=0
while ! is_stop "$target"; do
  head=$(jq -rn --arg head "$GITHUB_REPOSITORY_OWNER:$target" '$head | @uri')
  # two are enough to tell one layer below from an ambiguous stack
  api "/repos/$GITHUB_REPOSITORY/pulls?state=open&head=$head&per_page=2"
  count=$(jq 'length' "$body")
  [ "$count" -gt 0 ] || break
  if [ "$count" -gt 1 ]; then
    echo "::error::more than one open pull request has $target as its head branch, so the layer below $url is ambiguous; close the extra pull requests, or list $target in stack-stop-branches"
    exit 1
  fi

  number=$(jq -r '.[0].number' "$body")
  case "$visited" in
    *" $number "*)
      echo "::error::the pull request stack loops back to #$number at $target; retarget one of its pull requests, or list $target in stack-stop-branches"
      exit 1
      ;;
  esac
  visited+="$number "

  layers=$((layers + 1))
  if [ "$layers" -gt "$max_layers" ]; then
    echo "::error::the pull request stack is deeper than $max_layers layers at $target"
    exit 1
  fi
  check_pull "$number"
  target="$base"
done

echo "stack target: $target ($layers layer(s) below this pull request)"
echo "target=$target" >> "$GITHUB_OUTPUT"

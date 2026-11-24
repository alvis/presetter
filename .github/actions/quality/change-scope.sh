#!/usr/bin/env bash
# finds what a changed-only pull request run is scoped to
#
# input (env):
#   CHANGED_ONLY    true on a pull_request run with changed-only on; anything else runs in full
#   EVENT           event name, for the full-run notice
#   BASE_REF        the pull request's base branch; for a stacked pull request, the layer below
#   TARGET_REF      the branch the stack finally merges into; empty means BASE_REF
#   FULL_RUN_PATHS  patterns, one per line, whose change forces a full run
#   GITHUB_OUTPUT   set by the runner
# output ($GITHUB_OUTPUT), all empty on a full run:
#   unit-base         merge base with origin/<BASE_REF>, for unit tests and lint
#   integration-base  merge base with origin/<TARGET_REF>, for integration tests; empty runs them in full
#   changed-files     paths changed since unit-base, one per line, for lint; deleted paths are left out
set -euo pipefail

# the reason may hold a file name, so strip control characters before it reaches the log
notice() { echo "::notice::$1: $(printf '%s' "$2" | tr -d '[:cntrl:]')"; }
full() {
  notice "full run" "$1"
  exit 0
}

# pushes and manual dispatches have no base to diff against, so they run in full
[ "${CHANGED_ONLY:-}" = true ] || full "${EVENT:-unknown} event"
[ -n "${BASE_REF:-}" ] || full "no base branch"
TARGET_REF="${TARGET_REF:-$BASE_REF}"

# why a merge base can be missing: the fetch fallback below uses the checkout's credentials, and a checkout with
# `persist-credentials: false` keeps none, so on a private repository it cannot fetch and the run goes full
no_base_hint="shallow checkout, or a private repository checked out with persist-credentials: false, which cannot fetch the branch"

# print the merge base of HEAD and origin/<branch>, fetching the branch, then the rest of the history, when missing
merge_base() {
  local remote="refs/remotes/origin/$1"
  git check-ref-format --branch "$1" > /dev/null 2>&1 || return 1
  git merge-base HEAD "$remote" 2> /dev/null && return
  git fetch --no-tags --quiet origin "+refs/heads/$1:$remote" || true
  git merge-base HEAD "$remote" 2> /dev/null && return
  [ "$(git rev-parse --is-shallow-repository)" = true ] || return 1
  git fetch --no-tags --quiet --unshallow origin "+refs/heads/$1:$remote" || true
  git merge-base HEAD "$remote" 2> /dev/null
}

# write the paths changed between the given commit and HEAD to $list, null-delimited and unquoted, so any path survives
list="$(mktemp "${RUNNER_TEMP:-${TMPDIR:-/tmp}}/quality-scope.XXXXXX")"
trap 'rm -f "$list"' EXIT
diff_paths() { git -c core.quotePath=false diff -z --name-only "$@" HEAD > "$list"; }

# read the paths changed since a commit: all_files, deletions and both sides of a rename included, for full-run
# matching; files, without deletions, for lint, as a deleted file has nothing to lint
changed_since() {
  local file
  diff_paths --no-renames "$1" || return 1
  all_files=()
  while IFS= read -r -d '' file; do all_files+=("$file"); done < "$list"
  diff_paths --diff-filter=d "$1" || return 1
  files=()
  while IFS= read -r -d '' file; do files+=("$file"); done < "$list"
}

# print the first changed file matching a full-run pattern, as `<file> matches <pattern>`; call it in $(...)
full_run_hit() {
  local file pattern
  # a pattern is a case glob, never a pathname expansion
  set -f
  for file in ${all_files[@]+"${all_files[@]}"}; do
    while IFS= read -r pattern; do
      pattern="${pattern%$'\r'}"
      [ -n "$pattern" ] || continue
      # shellcheck disable=SC2254
      case "$file" in $pattern)
        echo "$file matches $pattern"
        return
        ;;
      esac
    done <<< "${FULL_RUN_PATHS:-}"
  done
  return 1
}

unit_base=$(merge_base "$BASE_REF") || full "no merge base with $BASE_REF ($no_base_hint?)"
changed_since "$unit_base" || full "git diff failed"
# one path per line cannot carry a newline, so scoping is unsafe
for file in ${all_files[@]+"${all_files[@]}"}; do
  case "$file" in *$'\n'*) full "a changed path contains a newline" ;; esac
done
# before the empty check, so deleting a full-run path names that path
hit=$(full_run_hit) && full "$hit"
[ ${#files[@]} -gt 0 ] || full "no changed files remain"
lint_files=("${files[@]}")

# integration tests cover what the whole stack brings to its target, so their scope reaches below this layer
integration_base="$unit_base"
if [ "$TARGET_REF" != "$BASE_REF" ]; then
  if ! integration_base=$(merge_base "$TARGET_REF"); then
    integration_base=""
    notice "integration tests run in full" "no merge base with $TARGET_REF ($no_base_hint?)"
  elif ! changed_since "$integration_base"; then
    integration_base=""
    notice "integration tests run in full" "git diff failed"
  elif hit=$(full_run_hit); then
    integration_base=""
    notice "integration tests run in full" "$hit"
  fi
fi

echo "unit tests and lint scoped to ${#lint_files[@]} changed file(s) since $unit_base ($BASE_REF)"
if [ -n "$integration_base" ]; then echo "integration tests scoped to changes since $integration_base ($TARGET_REF)"; fi
{
  echo "unit-base=$unit_base"
  echo "integration-base=$integration_base"
  delimiter="ghadelim_$(openssl rand -hex 16 2> /dev/null || echo "$RANDOM$RANDOM$$")"
  echo "changed-files<<$delimiter"
  printf '%s\n' "${lint_files[@]}"
  echo "$delimiter"
} >> "$GITHUB_OUTPUT"

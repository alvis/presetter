#!/usr/bin/env bash
# runs one package script for the quality action: the test kinds and the lint run
#
# input (env):
#   SCRIPT              package script to run
#   ARGS                arguments placed after `--`
#   COVERAGE_ARGS       extra arguments for the coverage run; empty adds none
#   CHANGED_SINCE       commit a changed-only test run diffs against, passed as vitest `--changed`; empty on a full run
#   CHANGED_FILES       newline-separated changed paths for lint; empty on a full run
#   CHANGED_FILES_ARGS  word placed before the changed paths; empty passes bare paths
#   SECRET_ENV          optional KEY=VALUE lines, masked and exported to this run only
# output: `pnpm run <script> -- [<changed-files-args> <files...>] <args> [--changed <commit>] <coverage args>`;
#         exits with its status
set -euo pipefail

index=0
while IFS= read -r line; do
  index=$((index + 1))
  line="${line%$'\r'}"
  # skip blank lines and comments
  [[ -z "${line//[[:space:]]/}" || "$line" =~ ^[[:space:]]*# ]] && continue

  key="${line%%=*}"
  # a key that fails the check is never echoed: a malformed line may be the secret itself
  if [[ "$line" != *=* || ! "$key" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
    echo "::error::test-env line $index is not a KEY=VALUE pair with a valid variable name"
    exit 1
  fi

  value="${line#*=}"
  [ -n "$value" ] && echo "::add-mask::$value"
  export "$key=$value"
done <<< "${SECRET_ENV:-}"

# split args on whitespace, but never glob them (e.g. --project=*(UNIT))
set -f
coverage=()
if [ -n "${COVERAGE_ARGS:-}" ]; then
  # shellcheck disable=SC2206
  coverage=($COVERAGE_ARGS)
  # vitest already derives coverage.changed from --changed, but only when the config leaves it unset; passing the
  # same commit explicitly keeps a config's own coverage.changed from scoping coverage to a different commit
  [ -n "${CHANGED_SINCE:-}" ] && coverage+=("--coverage.changed=$CHANGED_SINCE")
fi

changed=()
# vitest runs only the specs that the files changed since this commit reach
[ -n "${CHANGED_SINCE:-}" ] && changed=(--changed "$CHANGED_SINCE")

# shellcheck disable=SC2086
set -- ${ARGS:-} ${changed[@]+"${changed[@]}"} ${coverage[@]+"${coverage[@]}"}
if [ -n "${CHANGED_FILES:-}" ]; then
  files=()
  while IFS= read -r file; do
    [ -z "$file" ] && continue
    # a path starting with `-` would read as an option
    case "$file" in -*) file="./$file" ;; esac
    files+=("$file")
  done <<< "$CHANGED_FILES"
  # the changed paths lead, so a word such as a subcommand comes first
  # shellcheck disable=SC2086
  set -- ${CHANGED_FILES_ARGS:-} ${files[@]+"${files[@]}"} "$@"
fi

if [ $# -gt 0 ]; then pnpm run "$SCRIPT" -- "$@"; else pnpm run "$SCRIPT"; fi

#!/bin/bash

STAGED_FILES=""
FILES_TO_ADD_AFTER_LINTING=""
COUNT_FILES=0

function prepare_staged_files()
{
  STAGED_FILES=""
  FILES_TO_ADD_AFTER_LINTING=""
  COUNT_FILES=0

  local ends_with="${1}"
  local not_staged_files=$(git diff --diff-filter=b --name-only | grep -E "$ends_with")
  local filter_regex=$(create_pattern "${not_staged_files[*]}")

  STAGED_FILES=$(git diff --cached --diff-filter=d --name-only | grep -E "$ends_with")
  FILES_TO_ADD_AFTER_LINTING=$(filter_array_with_inverted_regex "${STAGED_FILES[*]}" "${filter_regex}")

  local array_files=($STAGED_FILES)

  COUNT_FILES=${#array_files[@]}
}
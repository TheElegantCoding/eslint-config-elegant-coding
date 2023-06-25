#!/bin/bash

function run_eslint()
{
  local eslint_exit_code=0

  ./node_modules/.bin/eslint $STAGED_FILES --quiet $1
  eslint_exit_code=$?

  if [ $eslint_exit_code != 0 ]; then
    print_error "Error during eslint linting"
    exit 1
  fi
}

function eslint_hook()
{
  local eslint_autofix_flag=""

  prepare_staged_files ".*\.(tsx?|jsx?)$"

  if [ ${#FILES_TO_ADD_AFTER_LINTING} = ${#STAGED_FILES} ]; then
    eslint_autofix_flag="--fix"
  fi

  if [[ -n "$STAGED_FILES" ]]; then
    spinner "Running eslint in ........... ${COUNT_FILES} files" run_eslint $eslint_autofix_flag
    add_files_to_staged_tree "${FILES_TO_ADD_AFTER_LINTING[*]}"
    print_success "Lint all ts/js files correctly"
  fi
}

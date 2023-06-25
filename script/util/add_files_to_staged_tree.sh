#!/bin/bash

function add_files_to_staged_tree()
{
  local files_paths=("$@")
  if [[ -n "${files_paths// /}" ]]; then
    git add $files_paths
  fi
}

#!/bin/bash

function create_pattern()
{
  local files_paths_list=("$@")
  local pattern=""
  for file_name in $files_paths_list; do
    pattern="${pattern}${file_name}|"
  done
  pattern=$(remove_last_char_if_not_empty "${pattern[*]}")
  echo "$pattern"
}
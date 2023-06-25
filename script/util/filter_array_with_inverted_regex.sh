#!/bin/bash

function filter_array_with_inverted_regex()
{
  local files_paths_list=("$@")
  local query=$2
  local container=""
  if [[ -z "${query}" ]]; then
    container=$files_paths_list
  else
    for value in $files_paths_list; do
      matched_string=$(echo "$value" | grep -v -E "$query")
      if [[ -n "$matched_string" ]]; then
        container="${container}${value} "
      fi
    done
    container=$(remove_last_char_if_not_empty "${container[*]}")
  fi
  echo "$container"
}

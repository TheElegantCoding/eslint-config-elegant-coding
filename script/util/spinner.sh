#!/bin/bash

function spinner()
{
  $2 & PID=$!
  local spin_icon=('⣾' '⣽' '⣻' '⢿' '⡿' '⣟' '⣯' '⣷')

  print_info "$1   "

  while ps -p $PID > /dev/null;
  do
    for spinner in "${spin_icon[@]}"; do
      printf "${BLUE_FOREGROUND}\b\b$spinner ${RESET}"
      sleep 0.1
    done
  done

  wait $PID
  local error=$?

  if [[ $error == 1 ]]; then
    exit 1
  fi

  printf "\n\n"
}

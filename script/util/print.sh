#!/bin/bash

function print_question()
{
  local QUESTION_PREFIX="${GREEN_FOREGROUND}?${RESET}"
  echo -e -n "${QUESTION_PREFIX}${WHITE_FOREGROUND} $1${RESET}"
}

function print_info()
{
  local INFO_PREFIX="${BLUE_BACKGROUND}${WHITE_FOREGROUND}${ICON_GEAR} INFO ${RESET}"
  printf "${INFO_PREFIX}${BLUE_FOREGROUND} $1${RESET}"
}

function print_error()
{
  local ERROR_PREFIX="${RED_BACKGROUND}${WHITE_FOREGROUND}${ICON_ERROR} ERROR ${RESET}"
  echo -e "${ERROR_PREFIX}${RED_FOREGROUND} $1${RESET}\n"
}

function print_success()
{
  local SUCCES_PREFIX="${GREEN_BACKGROUND}${WHITE_FOREGROUND}${ICON_CHECK} SUCCESS ${RESET}"
  echo -e "${SUCCES_PREFIX}${GREEN_FOREGROUND} $1${RESET}\n"
}
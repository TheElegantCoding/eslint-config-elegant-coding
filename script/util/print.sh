#!/bin/bash

source $(dirname $0)/../asset/icon.sh
source $(dirname $0)/../style/color.sh

function print_info()
{
  INFO_PREFIX="${BLUE_BACKGROUND}${ICON_GEAR} INFO ${RESET}"
  echo -e "${INFO_PREFIX}${BLUE_FOREGROUND}$1${RESET}"
}

function print_error()
{
  ERROR_PREFIX="${RED_BACKGROUND}${ICON_ERROR} ERROR ${RESET}"
  echo -e "${ERROR_PREFIX}${RED_FOREGROUND}${1}${RESET}"
}

function print_success()
{
  SUCCES_PREFIX="${GREEN_BACKGROUND}${ICON_CHECK} SUCCESS ${RESET}"
  echo -e "${SUCCES_PREFIX}${GREEN_FOREGROUND}${1}${RESET}"
}
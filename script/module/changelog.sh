#!/bin/bash

source $(dirname $0)/../util/print.sh
source $(dirname $0)/../util/spinner.sh

source $(dirname $0)/../asset/icon.sh

source $(dirname $0)/../style/color.sh

CHANGELOG_PATH=$(dirname $0)/../../CHANGELOG.md
DATE_TODAY="$(date '+%Y-%m-%d')"
COMMIT_CODE=$(git log --pretty=format:"%h")
GITHUB_REPO_URL=$(git config --get remote.origin.url)
PREVIOUS_TAG=$(git describe --abbrev=0)
LATEST_TAG=0
CHANGELOG_CONTENT=""

function new_changelog()
{
  CONTENT="# Changelog"
  CONTENT+='\n\n'
  CONTENT+="All notable changes to this project will be documented in this file."
  CONTENT+='\n\n'
  CONTENT+="The format is based on semantic version."
  CONTENT+='### Versioning'
  CONTENT+='\n\n'
  CONTENT+='- MAJOR version is a big change in the project'
  CONTENT+='\n'
  CONTENT+='- MINOR version is a small change in the project'
  CONTENT+='\n'
  CONTENT+='- PATCH version is a small change in the project'
  CONTENT+='\n\n'
  CONTENT+='One version have a structure like this (semantic version) - (version) - (date)'
  CONTENT+='\n\n'
  CONTENT+='The list of changes have the description - commit - author'
  CONTENT+='\n\n'
  CONTENT+='<p align="right">(<a href="changelog">back to top</a>)</p>'
  CONTENT+='\n\n'
  CONTENT+='---'
  CONTENT+='\n\n'
  CONTENT+='## Released'
  echo -e $CONTENT > $CHANGELOG_PATH
}

function organize_changelog_item()
{
  local github_url="https://github.com/"
  local github_commit_url="${GITHUB_REPO_URL%????}/commit/"

  local commit_feature=""
  local commit_bug=""
  local commit_remove=""
  local commit_doc=""
  local commit_style=""
  local commit_refactor=""
  local commit_perf=""
  local commit_test=""
  local commit_ci=""
  local commit_release=""
  local commit_breaking=""
  local commit_config=""
  local commit_security=""
  local commit_language=""
  local commit_begin=""
  local commit_typo=""
  local commit_asset=""
  local commit_package=""

  for commit_code in $COMMIT_CODE; do
    local commit_description=$(git log -1 ${commit_code} --pretty=format:"%s")
    local commit_author=$(git log -1 ${commit_code} --pretty=format:"%an")
    local commit_date=$(git log -1 ${commit_code} --pretty=format:"%cd" --date=local)
    local commit="\n- [\`${commit_code}\`](<${github_commit_url}${commit_code}>) - ${commit_description} - by [${commit_author}](<${github_url}${commit_author}>) - ${commit_date}"

    case $commit_description in
      ':sparkles: feat'*)
          commit_feature+=$commit
        ;;
      ':bug: fix'*)
          commit_bug+=$commit
        ;;
      ':fire: remove'*)
          commit_remove+=$commit
        ;;
      ':memo: doc'*)
          commit_doc+=$commit
        ;;
      ':art: style'*)
          commit_style+=$commit
        ;;
      ':recycle: refactor'*)
          commit_refactor+=$commit
        ;;
      ':zap: perf'*)
          commit_perf+=$commit
        ;;
      ':test_tube: test'*)
          commit_test+=$commit
        ;;
      ':construction_worker: ci'*)
          commit_ci+=$commit
        ;;
      ':rocket: release'*)
          commit_release+=$commit
        ;;
      ':rotating_light: breaking'*)
          commit_breaking+=$commit
        ;;
      ':wrench: config'*)
          commit_config+=$commit
        ;;
      ':lock: security'*)
          commit_security+=$commit
        ;;
      ':globe_with_meridians: language'*)
          commit_language+=$commit
        ;;
      ':pencil2: typo'*)
          commit_typo+=$commit
        ;;
      ':bento: asset'*)
          commit_asset+=$commit
        ;;
      ':package: package'*)
          commit_package+=$commit
        ;;
    esac
  done

  if [[ ! -z "$commit_breaking" ]]; then
    CHANGELOG_CONTENT+="### :rotating_light: Breaking changes\n${commit_breaking}\n\n"
  fi

  if [[ ! -z "$commit_feature" ]]; then
    CHANGELOG_CONTENT+="### :sparkles: Features\n${commit_feature}\n\n"
  fi

  if [[ ! -z "$commit_bug" ]]; then
    CHANGELOG_CONTENT+="### :bug: Fix\n${commit_bug}\n\n"
  fi

  if [[ ! -z "$commit_remove" ]]; then
    CHANGELOG_CONTENT+="### :fire: Remove\n${commit_remove}\n\n"
  fi

  if [[ ! -z "$commit_doc" ]]; then
    CHANGELOG_CONTENT+="### :memo: Documentation\n${commit_doc}\n\n"
  fi

  if [[ ! -z "$commit_style" ]]; then
    CHANGELOG_CONTENT+="### :art: Style\n${commit_style}\n\n"
  fi

  if [[ ! -z "$commit_refactor" ]]; then
    CHANGELOG_CONTENT+="### :recycle: Refactor\n${commit_refactor}\n\n"
  fi

  if [[ ! -z "$commit_perf" ]]; then
    CHANGELOG_CONTENT+="### :zap: Performance\n${commit_perf}\n\n"
  fi

  if [[ ! -z "$commit_test" ]]; then
    CHANGELOG_CONTENT+="### :test_tube: Test\n${commit_test}\n\n"
  fi

  #if [[ ! -z "$commit_release" ]]; then
    #CHANGELOG_CONTENT+="### :rocket: Release\n${commit_release}\n\n"
  #fi

  if [[ ! -z "$commit_config" ]]; then
    CHANGELOG_CONTENT+="### :wrench: Configuration\n${commit_config}\n\n"
  fi

  if [[ ! -z "$commit_security" ]]; then
    CHANGELOG_CONTENT+="### :lock: Security\n${commit_security}\n\n"
  fi

  if [[ ! -z "$commit_language" ]]; then
    CHANGELOG_CONTENT+="### :globe_with_meridians: Language\n${commit_language}\n\n"
  fi

  if [[ ! -z "$commit_begin" ]]; then
    CHANGELOG_CONTENT+="### :tada: Begin\n${commit_begin}\n\n"
  fi

  if [[ ! -z "$commit_typo" ]]; then
    CHANGELOG_CONTENT+="### :pencil2: Typo\n${commit_typo}\n\n"
  fi

  if [[ ! -z "$commit_asset" ]]; then
    CHANGELOG_CONTENT+="### :bento: Asset\n${commit_asset}\n\n"
  fi

  if [[ ! -z "$commit_package" ]]; then
    CHANGELOG_CONTENT+="### :package: Package\n${commit_asset}\n\n"
  fi

  CONTENT+=$CHANGELOG_CONTENT
}

function get_release_notes()
{
  COMMIT_CODE=$(git log $PREVIOUS_TAG..HEAD --pretty=format:"%h")
  organize_changelog_item
  RELEASE_NOTES=$CHANGELOG_CONTENT
}

function new_changelog_item()
{
  CONTENT="[${LATEST_TAG}](<${GITHUB_REPO_URL}/releases/tag/${LATEST_TAG}>) - ${DATE_TODAY}"
  CONTENT+='\n\n'
  organize_changelog_item

  sed -i "/## Released/a\ \n${CONTENT}" $CHANGELOG_PATH
}

function generate_changelog()
{
  LATEST_TAG=$1

  if test -f "$CHANGELOG_PATH"; then
    COMMIT_CODE=$(git log $PREVIOUS_TAG..HEAD --pretty=format:"%h")
    local array_commit=($COMMIT_CODE)
    local commit_count=${#COMMIT_CODE[@]}

    spinner "Adding ${commit_count} commits to changelog ..." new_changelog_item
    print_success "Succesfully commits added"
  else
    local array_commit=($COMMIT_CODE)
    local commit_count=${#COMMIT_CODE[@]}

    spinner "Generating changelog ..." new_changelog
    spinner "Adding ${commit_count} commits to changelog ..." new_changelog_item
    print_success "Succesfully changelog created"
  fi
}
#!/bin/bash

source $(dirname $0)/changelog.sh

source $(dirname $0)/../util/print.sh

source $(dirname $0)/../asset/icon.sh

source $(dirname $0)/../style/color.sh

DATE_TODAY="$(date '+%Y-%m-%d')"
PROJECT_NAME=$(git config --local remote.origin.url|sed -n 's#.*/\([^.]*\)\.git#\1#p')

function require_clean_work_tree()
{
  git update-index -q --ignore-submodules --refresh
  error=0

  if ! git diff-files --quiet --ignore-submodules --
  then
    git diff-files --name-status -r --ignore-submodules -- >&2
    error=1
  fi

  if ! git diff-index --cached --quiet HEAD --ignore-submodules --
  then
    git diff-index --cached --name-status -r --ignore-submodules HEAD -- >&2
    error=1
  fi

  if [ $error = 1 ]
  then
    print_error "Cannot release please commit firts all your files."
    exit 1
  fi
}

function get_version_title()
{
  VERSION_TITLE=""

  while :
  do
    print_question "Enter the title of the version: "
    read VERSION_TITLE

    if [[ $VERSION_TITLE != "" ]]; then
      printf "\n"
      break
    fi

    clear
    print_error "Please enter a valid title"
  done
}

function get_version()
{
  VERSION=""

  while :
  do
    print_question "Enter the version type: "
    read VERSION

    if [[ $VERSION == "major" ]] || [[ $VERSION == 'minor' ]] || [[ $VERSION == 'patch' ]]; then
      printf "\n"
      break
    fi

    clear
    print_error "Version not valid you should use (major, minor or patch)"
  done
}

function change_npm_version()
{
  NPM_VERSION=$(npm version $VERSION --no-git-tag-version)
}

function create_git_tag()
{
  local title=":rocket: release: ${NPM_VERSION} - ${VERSION_TITLE} - ${DATE_TODAY}"

  git tag -a $NPM_VERSION -m "$title"
  git push origin $NPM_VERSION

  get_release_notes

  local notes=$(echo -e "# ${title}\n\n$RELEASE_NOTES")

  gh release create $NPM_VERSION --generate-notes --notes "${notes}"
}

function add_updated_files
{
  generate_changelog $NPM_VERSION
  git add .
  git commit -m ":memo: doc: update changelog and package.jspon"
}

require_clean_work_tree
get_version
get_version_title
change_npm_version

print_info "Started releasing ${NPM_VERSION} for project ${PROJECT_NAME}\n\n"

add_updated_files
create_git_tag

printf "\n"

print_success "Release successfully"

# git tag | xargs git tag -d
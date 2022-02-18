#!/usr/bin/env sh

# This will check vale linting for errors against all the changing markdown files in the PR.
# This will gradually lead us to fixing all the files with errors.

apk add git
set -ex
git --no-pager branch -a
echo "$CI"

branchcmp="main"
if [ -f /.dockerenv ]; then
    branchcmp="remotes/origin/main"
fi

IFS='
'
modified_files=$(git --no-pager diff --name-only "${branchcmp}" -- '*.md')
for x in ${modified_files};
do
  echo "Evaluating the file with vale: $x"
  vale "$x";
done
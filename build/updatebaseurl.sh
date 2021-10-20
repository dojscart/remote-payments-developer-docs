#!/bin/bash

echo "Updating base url..."

if [ "$1" != "" ]; then
    BRANCH_NAME=$1
else
    echo "Branch name is missing!"
    exit 1
fi

echo "Branch name: $BRANCH_NAME"


if [ $BRANCH_NAME == "main" ]; then
    echo "Skipped config updates for '$BRANCH_NAME' branch"
    exit 0
fi

DEV_ENV=$(echo $BRANCH_NAME | sed -n 's/.*\/\([^ ]\+\).*/\1/p' | cut -f1,2 -d'-')

if [ $DEV_ENV == "" ]; then
    echo "Could not parse dev environment!"
    exit 1
fi

filename="/src/config.toml"

echo "Dev build detected! Updating '$filename' file..."

if [ -f $filename ]; then
    echo "$filename exists."
else
    echo "File not found: $filename"
    exit 1 
fi

sed -i "1irelativeURLs = true" $filename
sed -i "1icanonifyURLs = true" $filename
sed -i "1ibaseURL = \"https://dev-docs.dojo.dev/$DEV_ENV/\"" $filename

cat $filename


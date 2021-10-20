#!/bin/bash

echo "Updating base url..."

if [ "$1" != "" ]; then
    BRANCH_NAME=$1
else
    echo "Branch name is missing!"
    exit 1
fi

echo "Branch name: $BRANCH_NAME"

if [ $DEV_ENV == "main" ]; then
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

echo "baseURL=\"https://dev-api.dojo.dev/$DEV_ENV\"" >> $filename
echo "relativeURLs = true" >> $filename
echo "canonifyURLs = true" >> $filename

cat $filename


#!/bin/bash
echo "Updating base url..."

if [ "$1" != "" ]; then
    BRANCH_NAME=$1
else
    echo "Branch name is missing!"
    exit 1
fi

echo "Branch name: $BRANCH_NAME"

if [ $BRANCH_NAME == "" ]; then
    echo "No branch name provided!"
    exit 1
fi

if [ $BRANCH_NAME != "main" ]; then
    filename="/src/config.toml"
    
    echo "Dev build detected! Updating '$filename' file..."

    if [ -f $filename ]; then
        echo "$filename exists."
    else
        echo "File not found: $filename"
        exit 1 
    fi
    
    echo "baseURL=\"https://dev-api.dojo.dev/$BRANCH_NAME\"" >> $filename
    echo "relativeURLs = true" >> $filename
    echo "canonifyURLs = true" >> $filename

    cat $filename
fi


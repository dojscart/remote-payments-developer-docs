#!/bin/bash

echo "Updating base url..."

echo "Environment: $ENVIRONMENT"

filename="/app/docs-site/docusaurus.config.js"

if [ -f $filename ]; then
    echo "$filename exists."
else
    echo "File not found: $filename"
    exit 1 
fi

if [ $ENVIRONMENT == "production" ]; then
    echo "Production build detected."
    sed -i "s#url: 'https://dev-docs.dojo.dev'#url: 'https://docs.dojo.tech'#g" $filename
    cat $filename
    exit 0
fi

# Fix for master in dev?
if [ $ENVIRONMENT == "master" ]; then
    echo "Staging build detected!"
    sed -i "s#url: 'https://dev-docs.dojo.dev'#url: 'https://staging-docs.dojo.dev'#g" $filename
    sed -i "s#baseUrl: '/'#baseUrl: '/master/'#g" $filename
 
else
    echo "Dev build detected with '$ENVIRONMENT'!"
    sed -i "s#baseUrl: '/'#baseUrl: '/$ENVIRONMENT/'#g" $filename
fi

echo "File updated."
echo "Building now..."
yarn build
echo "Running now..."
yarn run serve --port 80 --host 0.0.0.0
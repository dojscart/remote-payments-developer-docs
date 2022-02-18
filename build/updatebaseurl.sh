#!/bin/bash

echo "Updating base url..."

if [ "$1" != "" ]; then
    BRANCH_NAME=$1
else
    echo "Branch name is missing!"
    exit 1
fi

if [ "$2" != "" ]; then
    CLOUDSDK_CONTAINER_CLUSTER=$2
else
    echo "Cluster name is missing!"
    exit 1
fi

echo "Branch name: $BRANCH_NAME"
echo "Cluster name: $CLOUDSDK_CONTAINER_CLUSTER"

filename="/app/docs-site/docusaurus.config.js"

if [ -f $filename ]; then
    echo "$filename exists."
else
    echo "File not found: $filename"
    exit 1 
fi

if [ $CLOUDSDK_CONTAINER_CLUSTER == "production-remotepayments" ]; then
    echo "Production build detected."
    sed -i "s#url: 'https://dev-docs.dojo.dev'#url: 'https://docs.dojo.tech'#g" $filename
    cat $filename
    exit 0
fi

DEV_ENV=$(echo $BRANCH_NAME | sed -n 's/.*\/\([^ ]\+\).*/\1/p' | cut -f1,2 -d'-')

if [ $BRANCH_NAME != "master" && "$DEV_ENV" == "" ]; then
    echo "Could not parse dev environment!"
    exit 1
fi

if [ $CLOUDSDK_CONTAINER_CLUSTER == "staging-remotepayments" ]; then
    echo "Staging build detected!"
    sed -i "s#url: 'https://dev-docs.dojo.dev'#url: 'https://staging-docs.dojo.dev'#g" $filename
    sed -i "s#baseUrl: '/'#baseUrl: '/master/'#g" $filename
 
else
    echo "Dev build detected with '$DEV_ENV'!"
    sed -i "s#baseUrl: '/'#baseUrl: '/$DEV_ENV/'#g" $filename
fi

cat $filename

#!/bin/bash

declare -a urls=("https://docs.dojo.tech/")
for url in "${urls[@]}"
do
    url=$(curl -s https://docs.dojo.tech/sitemap.xml | grep "<loc>" | awk -F"<loc>" '{print $2} ' | awk -F"</loc>" '{print $1}')
    urls+=( "url" )
done

for url in "${urls[@]}"
do 
    echo "$url"
    lychee -v $url
done

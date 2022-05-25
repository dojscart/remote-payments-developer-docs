urls=$(curl -s https://docs.dojo.tech/sitemap.xml | grep "<loc>" | awk -F"<loc>" '{print $2} ' | awk -F"</loc>" '{print $1}')
for i in $urls
do
  lychee -v $i
  print i
done
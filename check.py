import subprocess
import xml.etree.ElementTree as ET
tree = ET.parse('docs-site/build/sitemap.xml')
root = tree.getroot()
xmlDict = {}
for sitemap in root:
    children = list(sitemap)
    print (children[0].text)
    subprocess.run(["lychee", "-v", children[0].text] )
import os
import subprocess
import sys

setup = True

docsWithSnippetFile = "/Users/marismirnova/Git/remote-payments-developer-docs/src/content/api-docs/openapi-with-examples.json"
snippetFolder = "snippet"
apiFile = "/Users/marismirnova/Git/remote-payments-developer-docs/src/content/api-docs/remote-payments-internal-gateway-v2.json"

def cleanUp():
    try:
        subprocess.run(f"rm -r {docsWithSnippetFile} {snippetFolder}", shell=True)
    except:
        print("could not clean some files or already cleaned before")
    
def addSnippets():
    docsWithSnippet = open(docsWithSnippetFile, "w")
    if setup: subprocess.run(f"mkdir {snippetFolder}", shell=True)
    if setup: subprocess.run(f"cd {snippetFolder} && npm install snippet-enricher-cli", shell=True)
    #subprocess.run(f"./{snippetFolder}/node_modules/.bin/snippet-enricher-cli --input={apiFile}", shell=True)
    subprocess.run(f"npx snippet-enricher-cli --input={apiFile} --target go_native -t java -t c ", shell=True, stdout=docsWithSnippet)
    return docsWithSnippet

def main():
    global setup
    if len(sys.argv) > 1:
        if sys.argv[1] == 'clean':
            cleanUp()
            return
        elif sys.argv[1] == 'fast':
            setup = False

        
    addSnippets()

if __name__ == "__main__":
    main()

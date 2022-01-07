import os
import subprocess
import sys

setup = True

dir_path = os.path.dirname(os.path.realpath(__file__))

docsWithSnippetFile = f"{dir_path}/openapi-with-examples.json"
snippetFolder = "snippet"
apiFile = f"{dir_path}/api-definitions/bundled.yaml"

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
    subprocess.run(f"npx snippet-enricher-cli --input={apiFile} --targets='python_python3,node_request,shell_curl,php_curl,csharp_restsharp,python_requests,javascript_jquery,javascript_xhr,swift_nsurlsession,ruby_native,go_native,c_libcurl' ", shell=True, stdout=docsWithSnippet)
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

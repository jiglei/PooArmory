#!/usr/bin/env python
import os
import zipfile

from urllib.parse import urlencode
from urllib.request import Request, urlopen
#POST ?input=...

def min(filename):
	url = 'https://javascript-minifier.com/raw' # Set destination URL here
	input = open(filename).read()
	post_fields = {'input': input}     # Set POST fields here

	request = Request(url, urlencode(post_fields).encode())
	json = urlopen(request).read().decode()
	return json

def zipdir(path, ziph, ignore = []):
	# ziph is zipfile handle
	for root, dirs, files in os.walk(path):
		for file in files:
			if file.endswith(".js") and root == ".":
				arcpath = os.path.join(root, file)[2:]
				ziph.writestr(arcpath, min(os.path.join(root,file)))
			elif not file.endswith("zip") and not root.startswith(".\\.") and not file.endswith("zip.py"):
				ziph.write(os.path.join(root, file))

if __name__ == '__main__':
	zipf = zipfile.ZipFile('site.zip', 'w', zipfile.ZIP_DEFLATED)
	zipdir('.', zipf)
	zipf.close()
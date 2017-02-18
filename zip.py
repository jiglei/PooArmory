#!/usr/bin/env python
import os
import zipfile

def zipdir(path, ziph, ignore = []):
	# ziph is zipfile handle
	for root, dirs, files in os.walk(path):
		for file in files:
			if not file.endswith("zip") and not root.startswith("./.") and not file.endswith("zip.py"):
				ziph.write(os.path.join(root, file))

if __name__ == '__main__':
	zipf = zipfile.ZipFile('site.zip', 'w', zipfile.ZIP_DEFLATED)
	zipdir('./', zipf)
	zipf.close()
from pathlib import Path
import re
import json

for f in Path.cwd().iterdir():
	#m = re.match(r"(?P<name>.*)(?<!-json)\.json", f.name)
	m = re.match(r"(?P<name>.*)(?<!coy)-json\.json", f.name)
	# if m is not None:
		# print(f"Match for {f.name}")
	# else:
		# print(f"No match for {f.name}")
		
	if m is None:
		continue
		
	name = m.group("name")
		
	newDir = Path.cwd() / name
	newDir.mkdir(parents=True,exist_ok=True)
	
	contents = None
	
	with open(f, "r") as fHandle:
		contents = fHandle.read()
	
	with open(newDir / "index.cjs.js", "w") as w:
		w.write("'use strict';\r\n")
		w.write(f"var webuiFormat = {contents}\r\n")
		
		w.write("""
var theme = {
	plain: {
		color: webuiFormat.color,
		backgroundColor: webuiFormat.backgroundColor
	},
	styles: []
}

for (let key in webuiFormat) {	
	theme.styles.push({
		types: key.split(",").map(s => s.substring(1)),
		style: webuiFormat[key]
	});
}

module.exports = theme;
		""")
		
	package = {
	  "name": name,
	  "private": True,
	  "sideEffects": False,
	  "main": "index.cjs.js",
	  "module": "index.cjs.js",
	  "license": "Unknown"
	}
	
	with open(newDir / "package.json", "w") as w:
		w.write(json.dumps(package, indent=4))

	#f.rename(f.parent / f"{name}-json.json")
	print(newDir)




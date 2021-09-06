from pathlib import Path
import re
import json

contents = None
with open(Path.cwd() / "vkuhlmann-website-theme.css") as f:
	contents = f.read()
	
contents = contents.split("\n\n")[1:]

styles = []

for rule in contents:
	#print(rule)
	m = re.findall(r"(?:^|,)\s*\.token\.([^, ]*)\s*(?=[,{])", rule)
	
	styleContents = re.search("\{[^}]*\}", rule).group(0)
	
	mapTo = {
		"color": "color",
		"background": "backgroundColor",
		"font-weight": "fontWeight",
		"font-style": "fontStyle",
		"cursor": "cursor",
		"opacity": "opacity"
	}
	
	style = {}
	
	for key in mapTo:
		val = re.search(r"(?:\n|^)\s*" + key + r": (.*);(?=\n|$)", rule)
		if val is None:
			continue
		
		style[mapTo[key]] = val.group(1)
	
	print()
	print(styleContents)
	print()
	styles += [{
		"types": m,
		"style": style#json.loads(styleContents)
	}]
	
	#print(m)

print(json.dumps(styles, indent=2))


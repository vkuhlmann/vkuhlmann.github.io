'use strict';
var webuiFormat = {
  "color": "#657b83",
  "backgroundColor": "#073642",
  ".comment,.prolog,.doctype,.cdata": {
    "color": "#93a1a1"
  },
  ".punctuation": {
    "color": "#586e75"
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".property,.tag,.boolean,.number,.constant,.symbol,.deleted": {
    "color": "#268bd2"
  },
  ".selector,.attr-name,.string,.char,.builtin,.url,.inserted": {
    "color": "#2aa198"
  },
  ".entity": {
    "color": "#657b83",
    "background": "#eee8d5",
    "cursor": "help"
  },
  ".atrule,.attr-value,.keyword": {
    "color": "#859900"
  },
  ".function,.class-name": {
    "color": "#b58900"
  },
  ".regex,.important,.variable": {
    "color": "#cb4b16"
  },
  ".important,.bold": {
    "fontWeight": "bold"
  },
  ".italic": {
    "fontStyle": "italic"
  },
  ".highlight": {
    "background": "hsla(0, 70%, 40%, .2)"
  }
}


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
		
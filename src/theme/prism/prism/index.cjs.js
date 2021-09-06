'use strict';
var webuiFormat = {
  "color": "black",
  "backgroundColor": "#f5f2f0",
  ".comment,.prolog,.doctype,.cdata": {
    "color": "slategray"
  },
  ".punctuation": {
    "color": "#999"
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".property,.tag,.boolean,.number,.constant,.symbol,.deleted": {
    "color": "#905"
  },
  ".selector,.attr-name,.string,.char,.builtin,.inserted": {
    "color": "#690"
  },
  ".operator,.entity,.url,.language-css .string,.style .string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".atrule,.attr-value,.keyword": {
    "color": "#07a"
  },
  ".function,.class-name": {
    "color": "#DD4A68"
  },
  ".regex,.important,.variable": {
    "color": "#e90"
  },
  ".important,.bold": {
    "fontWeight": "bold"
  },
  ".italic": {
    "fontStyle": "italic"
  },
  ".entity": {
    "cursor": "help"
  },
  ".highlight": {
    "background": "hsla(0, 0%, 70%, .5)"
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
		
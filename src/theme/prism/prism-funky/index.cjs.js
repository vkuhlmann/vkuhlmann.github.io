'use strict';
var webuiFormat = {
  "color": "white",
  "backgroundColor": "black",
  ".comment,.prolog,.doctype,.cdata": {
    "color": "#aaa"
  },
  ".punctuation": {
    "color": "#999"
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".property,.tag,.boolean,.number,.constant,.symbol": {
    "color": "#0cf"
  },
  ".selector,.attr-name,.string,.char,.builtin": {
    "color": "yellow"
  },
  ".operator,.entity,.url,.language-css .string,.variable,.inserted": {
    "color": "yellowgreen"
  },
  ".atrule,.attr-value,.keyword": {
    "color": "deeppink"
  },
  ".regex,.important": {
    "color": "orange"
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
  ".deleted": {
    "color": "red"
  },
  ".highlight": {
    "background": "hsla(0, 0%, 40%, .5)"
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
		
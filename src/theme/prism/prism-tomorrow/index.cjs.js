'use strict';
var webuiFormat = {
  "color": "#ccc",
  "backgroundColor": "#2d2d2d",
  ".comment,.block-comment,.prolog,.doctype,.cdata": {
    "color": "#999"
  },
  ".punctuation": {
    "color": "#ccc"
  },
  ".tag,.attr-name,.namespace,.deleted": {
    "color": "#e2777a"
  },
  ".function-name": {
    "color": "#6196cc"
  },
  ".boolean,.number,.function": {
    "color": "#f08d49"
  },
  ".property,.class-name,.constant,.symbol": {
    "color": "#f8c555"
  },
  ".selector,.important,.atrule,.keyword,.builtin": {
    "color": "#cc99cd"
  },
  ".string,.char,.attr-value,.regex,.variable": {
    "color": "#7ec699"
  },
  ".operator,.entity,.url": {
    "color": "#67cdcc"
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
  ".inserted": {
    "color": "green"
  },
  ".highlight": {
    "background": "hsla(0, 0%, 30%, .5)"
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
		
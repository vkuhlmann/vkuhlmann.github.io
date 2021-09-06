'use strict';
var webuiFormat = {
  "color": "white",
  "backgroundColor": "hsl(30, 20%, 25%)",
  ".comment,.prolog,.doctype,.cdata": {
    "color": "hsl(30, 20%, 50%)"
  },
  ".punctuation": {
    "opacity": 0.7
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".property,.tag,.boolean,.number,.constant,.symbol": {
    "color": "hsl(350, 40%, 70%)"
  },
  ".selector,.attr-name,.string,.char,.builtin,.inserted": {
    "color": "hsl(75, 70%, 60%)"
  },
  ".operator,.entity,.url,.language-css .string,.style .string,.variable": {
    "color": "hsl(40, 90%, 60%)"
  },
  ".atrule,.attr-value,.keyword": {
    "color": "hsl(350, 40%, 70%)"
  },
  ".regex,.important": {
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
  ".deleted": {
    "color": "red"
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
		
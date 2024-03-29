'use strict';

var a = {
  "color": "black",
  "backgroundColor": "#fdfdfd",
  ".comment,.block-comment,.prolog,.doctype,.cdata": {
    "color": "#7D8B99"
  },
  ".punctuation": {
    "color": "#5F6364"
  },
  ".property,.tag,.boolean,.number,.function-name,.constant,.symbol,.deleted": {
    "color": "#c92c2c"
  },
  ".selector,.attr-name,.string,.char,.function,.builtin,.inserted": {
    "color": "#2f9c0a"
  },
  ".operator,.entity,.url,.variable": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  ".atrule,.attr-value,.keyword,.class-name": {
    "color": "#1990b8"
  },
  ".regex,.important": {
    "color": "#e90"
  },
  ".language-css .string,.style .string": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  ".important": {
    "fontWeight": "normal"
  },
  ".bold": {
    "fontWeight": "bold"
  },
  ".italic": {
    "fontStyle": "italic"
  },
  ".entity": {
    "cursor": "help"
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".highlight": {
    "background": "hsla(0, 0%, 70%, .5)"
  }
};



var theme = {
	plain: {
		color: a.color,
		backgroundColor: a.backgroundColor
	},
	styles: []
}

for (let key in a) {	
	theme.styles.push({
		types: key.split(",").map(s => s.substring(1)),
		style: a[key]
	});
}

console.log("Exporting theme");
console.log(JSON.stringify(theme));

module.exports = theme;


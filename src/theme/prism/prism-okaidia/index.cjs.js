'use strict';
var webuiFormat = {
  "color": "#f8f8f2",
  "backgroundColor": "#272822",
  ".comment,.prolog,.doctype,.cdata": {
    "color": "#8292a2"
  },
  ".punctuation": {
    "color": "#f8f8f2"
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".property,.tag,.constant,.symbol,.deleted": {
    "color": "#f92672"
  },
  ".boolean,.number": {
    "color": "#ae81ff"
  },
  ".selector,.attr-name,.string,.char,.builtin,.inserted": {
    "color": "#a6e22e"
  },
  ".operator,.entity,.url,.language-css .string,.style .string,.variable": {
    "color": "#f8f8f2"
  },
  ".atrule,.attr-value,.function,.class-name": {
    "color": "#e6db74"
  },
  ".keyword": {
    "color": "#66d9ef"
  },
  ".regex,.important": {
    "color": "#fd971f"
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
		
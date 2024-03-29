'use strict';
var webuiFormat = {
  "color": "white",
  "backgroundColor": "hsl(0, 0%, 8%)",
  ".comment,.prolog,.doctype,.cdata": {
    "color": "hsl(0, 0%, 47%)"
  },
  ".punctuation": {
    "opacity": 0.7
  },
  ".namespace": {
    "opacity": 0.7
  },
  ".tag,.boolean,.number,.deleted": {
    "color": "hsl(14, 58%, 55%)"
  },
  ".keyword,.property,.selector,.constant,.symbol,.builtin": {
    "color": "hsl(53, 89%, 79%)"
  },
  ".attr-name,.attr-value,.string,.char,.operator,.entity,.url,.language-css .string,.style .string,.variable,.inserted": {
    "color": "hsl(76, 21%, 52%)"
  },
  ".atrule": {
    "color": "hsl(218, 22%, 55%)"
  },
  ".regex,.important": {
    "color": "hsl(42, 75%, 65%)"
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
  ".language-markup .tag,.language-markup .attr-name,.language-markup .punctuation": {
    "color": "hsl(33, 33%, 52%)"
  },
  "": {
    "position": "relative",
    "zIndex": 1
  },
  ".line-highlight": {
    "background": [
      "hsla(0, 0%, 33%, 0.25)",
      "linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))"
    ],
    "borderBottom": "1px dashed hsl(0, 0%, 33%)",
    "borderTop": "1px dashed hsl(0, 0%, 33%)",
    "left": "0",
    "lineHeight": "inherit",
    "marginTop": "0.75em",
    "padding": "inherit 0",
    "pointerEvents": "none",
    "position": "absolute",
    "right": "0",
    "whiteSpace": "pre",
    "zIndex": 0
  },
  ".line-highlight:before,.line-highlight[data-end]:after": {
    "backgroundColor": "hsl(215, 15%, 59%)",
    "borderRadius": "999px",
    "boxShadow": "0 1px white",
    "color": "hsl(24, 20%, 95%)",
    "content": "attr(data-start)",
    "font": "bold 65%/1.5 sans-serif",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0 .5em",
    "position": "absolute",
    "textAlign": "center",
    "textShadow": "none",
    "top": ".4em",
    "verticalAlign": ".3em"
  },
  ".line-highlight[data-end]:after": {
    "bottom": ".4em",
    "content": "attr(data-end)",
    "top": "auto"
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
		
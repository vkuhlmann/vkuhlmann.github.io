'use strict';

var aa =
[
  {
    "types": [
      "comment",
      "prolog",
      "doctype",
      "cdata"
    ],
    "style": {
      "color": "slategray"
    }
  },
  {
    "types": [
      "punctuation"
    ],
    "style": {
      "color": "#999"
    }
  },
  {
    "types": [
      "namespace"
    ],
    "style": {
      "opacity": ".7"
    }
  },
  {
    "types": [
      "property",
      "tag",
      "boolean",
      "number",
      "constant",
      "symbol",
      "deleted"
    ],
    "style": {
      "color": "#905"
    }
  },
  {
    "types": [
      "selectorDISABLED",
      "attr-name",
      "string",
      "char",
      "builtin",
      "inserted"
    ],
    "style": {
      "color": "#690"
    }
  },
  {
    "types": [
      "operator",
      "entity",
      "url"
    ],
    "style": {
      "color": "#9a6e3a",
      "backgroundColor": "hsla(0, 0%, 100%, .5)"
    }
  },
  {
    "types": [
      "atrule",
      "attr-value",
      "keyword"
    ],
    "style": {
      "color": "#07a"
    }
  },
  {
    "types": [
      "function",
      "class-name"
    ],
    "style": {
      "color": "#DD4A68"
    }
  },
  {
    "types": [
      "regex",
      "important",
      "variable"
    ],
    "style": {
      "color": "#e90"
    }
  },
  {
    "types": [
      "important",
      "bold"
    ],
    "style": {
      "fontWeight": "bold",
      "fontStyle": "italic"
    }
  },
  {
    "types": [
      "entity"
    ],
    "style": {
      "cursor": "help"
    }
  }
]

var theme = {
	plain: {
		color: "#000",
		backgroundColor: "#f5f2f0",
		//backgroundColor: "yellow"
	},
	styles: aa
}

module.exports = theme;

(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[3877],{5276:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return x},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var r=n(7462),o=n(3366),a=n(7294),c=n(3905),s=(n(448),n(9882)),l=n(7200),i=n(1874),u=(n(6486),n(8834)),p=n(727),m=function(e){var t=(0,a.useContext)(s.Z).isDarkTheme?l.$_:l.Wb,n=(0,a.useState)(!1),r=n[0],o=(n[1],(0,a.useRef)(),(0,a.useRef)(),(0,a.useState)(!1)),c=o[0],m=o[1],h=(0,a.useState)(!1),f=h[0],y=h[1],b=f?d:g;return c&&(b=(b=(b=(b=(b=b.replace(/\[english\]\{babel\}/,"[dutch]{babel}")).replace(/Hello everyone!/,"Hallo iedereen!")).replace(/Introduction/,"Introductie")).replace(/My document/,"Mijn document")).replace(/author\{Me\}/,"author{Ik}")),a.createElement(u.f,{theme:t},a.createElement(p.xu,{as:"form",onSubmit:function(e){return e.preventDefault()}},a.createElement(p.__,{mb:3},a.createElement(p.XZ,{checked:c,onChange:function(e){return m(!c)}}),a.createElement(p.xu,null,"Dutch")),a.createElement(p.__,{mb:3},a.createElement(p.XZ,{checked:f,onChange:function(e){return y(!f)}}),a.createElement(p.xu,null,"Include Theorem, Lemma etc.")),r&&a.createElement("p",{style:{color:"red"}},r.replace(/\r/g,"").split("\n").map((function(e,t){return a.createElement(a.Fragment,{key:t},e,a.createElement("br",null))})))),a.createElement(i.Z,{children:b,language:"latex",className:"language-latex",metastring:"latex"}))},d="\\documentclass[a4paper]{article}\n\n\\usepackage[utf8]{inputenc}\n\\usepackage[margin=2.54cm]{geometry}\n\n\\usepackage{amsmath,amssymb,amsthm}\n\\usepackage{commath,mathtools}\n\\usepackage{parskip}\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\\usepackage[english]{babel}\n\\usepackage[bookmarksnumbered]{hyperref}\n\n\\newtheorem{theorem}{Theorem}[section]\n\\newtheorem{lemma}[theorem]{Lemma}\n\n\\theoremstyle{definition}\n\\newtheorem{example}[theorem]{Example}\n\\newtheorem{definition}[theorem]{Definition}\n\n\\theoremstyle{remark}\n\\newtheorem{remark}[theorem]{Remark}\n\n\\theoremstyle{definition}\n\\newtheorem*{note}{Note}\n\n\n\\title{My document}\n\\author{Me}\n\\date{September 2021}\n\n\\setcounter{secnumdepth}{2}\n\n\\begin{document}\n    \\maketitle\n\n    \\tableofcontents\n    %\\newpage\n    \\section{Introduction}\n\n    Hello everyone!\n\n    \\subsection{A subsection}\n    \\subsubsection{A subsubsection}\n\n    \\begin{theorem}\n        AA\n        \\begin{proof}\n            BB\n        \\end{proof}\n    \\end{theorem}\n\n    \\begin{lemma}[CC]\n        DD\n    \\end{lemma}\n\n    \\section{Another section}\n\n    \\begin{definition}\n        EE\n    \\end{definition}\n\\end{document}\n",g="\\documentclass[a4paper]{article}\n\n\\usepackage[utf8]{inputenc}\n\\usepackage[margin=2.54cm]{geometry}\n\n\\usepackage{amsmath,amssymb,amsthm}\n\\usepackage{commath,mathtools}\n\\usepackage{parskip}\n\\usepackage{graphicx}\n\\usepackage{xcolor}\n\\usepackage[english]{babel}\n\\usepackage[bookmarksnumbered]{hyperref}\n\n\\title{My document}\n\\author{Me}\n\\date{September 2021}\n\n\\setcounter{secnumdepth}{2}\n\n\\begin{document}\n    \\maketitle\n\n    \\tableofcontents\n    \\section{Introduction}\n\n    Hello everyone!\n\\end{document}\n",h=["components"],f={sidebar_position:3},y="Example of a good preamble setup",b={unversionedId:"example",id:"example",isDocsHomePage:!1,title:"Example of a good preamble setup",description:"\x3c!--",source:"@site/latex/example.md",sourceDirName:".",slug:"/example",permalink:"/latex/example",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Exercises of part 2",permalink:"/latex/exercises/2022-02-GSNS/part2"},next:{title:"Common packages",permalink:"/latex/packages"}},k=[],v={toc:k};function x(e){var t=e.components,n=(0,o.Z)(e,h);return(0,c.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"example-of-a-good-preamble-setup"},"Example of a good preamble setup"),(0,c.kt)(m,{mdxType:"DocumentGenerator"}))}x.isMDXComponent=!0},1242:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},I:function(){return u}});var r=n(7294),o=/{\w+}/g,a="{}";function c(e,t){var n=[],c=e.replace(o,(function(e){var o=e.substr(1,e.length-2),c=null==t?void 0:t[o];if(void 0!==c){var s=r.isValidElement(c)?c:String(c);return n.push(s),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?c.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):c.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function s(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return c(t,n)}var l=n(7529);function i(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return c(null!==(n=i({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var c=null!==(t=i({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(s,{values:a},c)}},7200:function(e,t,n){"use strict";n.d(t,{$_:function(){return o},Wb:function(){return a}});var r={forms:{label:{fontSize:1,fontWeight:"bold"},input:{borderColor:"gray","&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px "+e.colors.primary},outline:"none"},"&:disabled":{backgroundColor:"disabledBackground",color:"disabledForeground"}},select:{borderColor:"gray","&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px "+e.colors.primary},outline:"none"}},textarea:{borderColor:"gray","&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px "+e.colors.primary},outline:"none"}},slider:{bg:"muted"}},buttons:{primary:{color:"background",bg:"primary"},secondary:{color:"background",bg:"secondary"},gray:{color:"background",bg:"gray"}},alerts:{danger:{color:"white",bg:"darkred"}}},o=Object.assign({},r,{colors:{text:"var(--ifm-font-color-base)",background:"var(--ifm-background-color)",primary:"var(--ifm-color-primary)",secondary:"#111199",muted:"#f6f6f6",highlight:"var(--ifm-color-primary-contrast-background)",gray:"#777777",accent:"#660099",darken:"rgba(0, 0, 0, 0.25)",disabledBackground:"hsl(0, 0%, 20%)",disabledForeground:"hsl(0, 0%, 50%)"}}),a=Object.assign({},r,{colors:{text:"var(--ifm-font-color-base)",background:"#fff",primary:"var(--ifm-color-primary)",secondary:"#111199",muted:"#f6f6f6",highlight:"var(--ifm-color-primary-contrast-background)",gray:"#777777",accent:"#660099",darken:"rgba(0, 0, 0, 0.25)",disabledBackground:"hsl(0, 0%, 90%)",disabledForeground:"hsl(0, 0%, 80%)"}})},1874:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(7462),o=n(7294),a=n(6010),c=n(4544),s=n(8206),l=n(7594),i=n.n(l),u=n(448),p=n(1242),m="codeBlockContainer_2gih",d="codeBlockContent_3z4W",g="codeBlockTitle_1Kb7",h="codeBlock_6upA",f="copyButton_2e3i",y="codeBlockLines_xlV7",b=n(4311),k=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function x(e){var t=e.children,n=e.className,l=e.metastring,x=e.title,E=(0,b.LU)().prism,w=(0,o.useState)(!1),j=w[0],C=w[1],T=(0,o.useState)(!1),S=T[0],D=T[1];(0,o.useEffect)((function(){D(!0)}),[]);var N=(0,b.bc)(l)||x,Z=(0,o.useRef)(null),B=[],_=(0,u.Z)(),I=Array.isArray(t)?t.join(""):t;if(l&&k.test(l)){var P=l.match(k)[1];B=i()(P).filter((function(e){return e>0}))}var L=n&&n.replace(/language-/,"");!L&&E.defaultLanguage&&(L=E.defaultLanguage);var A=I.replace(/\n$/,"");if(0===B.length&&void 0!==L){for(var O,M="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(L),z=I.replace(/\n$/,"").split("\n"),F=0;F<z.length;){var $=F+1,W=z[F].match(R);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":M+=$+",";break;case"highlight-start":O=$;break;case"highlight-end":M+=O+"-"+($-1)+","}z.splice(F,1)}else F+=1}B=i()(M),A=z.join("\n")}var H=function(){(0,s.Z)(A),C(!0),setTimeout((function(){return C(!1)}),2e3)};return o.createElement(c.ZP,(0,r.Z)({},c.lG,{key:String(S),theme:_,code:A,language:L}),(function(e){var t=e.className,n=e.style,c=e.tokens,s=e.getLineProps,l=e.getTokenProps;return o.createElement("div",{className:m},N&&o.createElement("div",{style:n,className:g},N),o.createElement("div",{className:(0,a.Z)(d,L)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,h,"thin-scrollbar"),style:n},o.createElement("code",{className:y},c.map((function(e,t){var n=s({line:e,key:t});B.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line");var a=!0;return e.length>0&&e[e.length-1].content.endsWith("\n")&&(a=!1),o.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))})),a&&"\n")})))),o.createElement("button",{ref:Z,type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(f,"clean-btn"),onClick:H},j?o.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return g},lG:function(){return c}});var r=n(7410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(7294),c={Prism:r.Z,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=l({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?l({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),s(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=r[c]++)<o[c];){var m=void 0,d=t[c],g=n[c][a];if("string"==typeof g?(d=c>0?d:["plain"],m=g):(d=p(d,g.type),g.alias&&(d=p(d,g.alias)),m=g.content),"string"==typeof m){var h=m.split(i),f=h.length;s.push({types:d,content:h[0]});for(var y=1;y<f;y++)u(s),l.push(s=[]),s.push({types:d,content:h[y]})}else c++,t.push(d),n.push(m),r.push(0),o.push(m.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return u(s),l}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},8206:function(e,t,n){"use strict";function r(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}return n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus(),c}n.d(t,{Z:function(){return r}})}}]);
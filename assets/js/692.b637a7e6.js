(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[692],{7692:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var o=n(7462),r=n(7294),s=n(6010),l=n(4544),a=n(8206),c=n(7594),i=n.n(c),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(5350),y=n(9443),d=function(){var e=(0,y.LU)().prism,t=(0,p.Z)().isDarkTheme,n=e.theme||u,o=e.darkTheme||n;return t?o:n},h=n(4973),g="codeBlockContainer_K1bP",m="codeBlockContent_hGly",f="codeBlockTitle_eoMF",v="codeBlock_23N8",b="copyButton_Ue-o",k="codeBlockLines_39YC",j=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function N(e){var t=e.children,n=e.className,c=e.metastring,u=e.title,p=(0,y.LU)().prism,N=(0,r.useState)(!1),T=N[0],C=N[1],E=(0,r.useState)(!1),w=E[0],P=E[1];(0,r.useEffect)((function(){P(!0)}),[]);var B=(0,y.bc)(c)||u,Z=(0,r.useRef)(null),L=[],S=d(),_=Array.isArray(t)?t.join(""):t;if(c&&j.test(c)){var O=c.match(j)[1];L=i()(O).filter((function(e){return e>0}))}var D=n&&n.replace(/language-/,"");!D&&p.defaultLanguage&&(D=p.defaultLanguage);var A=_.replace(/\n$/,"");if(0===L.length&&void 0!==D){for(var z,I="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(D),$=_.replace(/\n$/,"").split("\n"),F=0;F<$.length;){var G=F+1,U=$[F].match(R);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=G+",";break;case"highlight-start":z=G;break;case"highlight-end":I+=z+"-"+(G-1)+","}$.splice(F,1)}else F+=1}L=i()(I),A=$.join("\n")}var K=function(){(0,a.Z)(A),C(!0),setTimeout((function(){return C(!1)}),2e3)};return r.createElement(l.ZP,(0,o.Z)({},l.lG,{key:String(w),theme:S,code:A,language:D}),(function(e){var t=e.className,n=e.style,l=e.tokens,a=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:g},B&&r.createElement("div",{style:n,className:f},B),r.createElement("div",{className:(0,s.Z)(m,D)},r.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,v,"thin-scrollbar"),style:n},r.createElement("code",{className:k},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t});return L.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))})))})))),r.createElement("button",{ref:Z,type:"button","aria-label":(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(b,"clean-btn"),onClick:K},T?r.createElement(h.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(h.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},7594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return h},lG:function(){return l}});var o=n(7410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s=n(7294),l={Prism:o.Z,theme:r};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),a(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),a(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,s=c({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(s.style=l.plain),void 0!==r&&(s.style=void 0!==s.style?c({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),a(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return s[n[0]];var l=o?{display:"inline-block"}:{},a=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[l].concat(a))}})),a(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,s=e.token,l=c({},d(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?c({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),a(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var s=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,s=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],s=0,l=0,a=[],c=[a];l>-1;){for(;(s=o[l]++)<r[l];){var y=void 0,d=t[l],h=n[l][s];if("string"==typeof h?(d=l>0?d:["plain"],y=h):(d=p(d,h.type),h.alias&&(d=p(d,h.alias)),y=h.content),"string"==typeof y){var g=y.split(i),m=g.length;a.push({types:d,content:g[0]});for(var f=1;f<m;f++)u(a),c.push(a=[]),a.push({types:d,content:g[f]})}else l++,t.push(d),n.push(y),o.push(0),r.push(y.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return u(a),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component)},8206:function(e,t,n){"use strict";function o(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let s=!1;r.rangeCount>0&&(s=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}return n.remove(),s&&(r.removeAllRanges(),r.addRange(s)),o&&o.focus(),l}n.d(t,{Z:function(){return o}})}}]);
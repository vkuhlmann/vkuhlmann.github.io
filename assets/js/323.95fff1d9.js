(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[323],{8608:function(e,t,n){"use strict";n.d(t,{N:function(){return y},Z:function(){return d}});var r=n(3366),o=n(7462),l=n(7294),a=n(6010),i=n(1242),s=n(4311),c="enhancedAnchor_2LWZ",u="h1Heading_27L5",p=["id"],y=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,o.Z)({},t,{id:void 0,className:u}),t.children))},d=function(e){return"h1"===e?y:(t=e,function(e){var n,o=e.id,u=(0,r.Z)(e,p),y=(0,s.LU)().navbar.hideOnScroll;return o?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,a.Z)("anchor",(n={},n[c]=!y,n)),id:o}),u.children,l.createElement("a",{className:"hash-link",href:"#"+o,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},8272:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7462),o=n(7294),l=n(33),a=n(1874),i=n(8608),s=n(6010),c=n(4311),u="details_1VDD";function p(e){var t=Object.assign({},e);return o.createElement(c.PO,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",u,t.className)}))}var y={code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(a.Z,e):o.createElement("code",e)},a:function(e){return o.createElement(l.Z,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:o.createElement(a.Z,(0,o.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=o.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=o.createElement(o.Fragment,null,t.filter((function(e){return e!==n})));return o.createElement(p,(0,r.Z)({},e,{summary:n}),l)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")}},448:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},o=n(6758),l=n(4311),a=function(){var e=(0,l.LU)().prism,t=(0,o.Z)().isDarkTheme,n=e.theme||r,a=e.darkTheme||n;return t?a:n}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return h},lG:function(){return a}});var r=n(7410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=n(7294),a={Prism:r.Z,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=s({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?s({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=s({},d(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,i=[],s=[i];a>-1;){for(;(l=r[a]++)<o[a];){var y=void 0,d=t[a],h=n[a][l];if("string"==typeof h?(d=a>0?d:["plain"],y=h):(d=p(d,h.type),h.alias&&(d=p(d,h.alias)),y=h.content),"string"==typeof y){var m=y.split(c),f=m.length;i.push({types:d,content:m[0]});for(var g=1;g<f;g++)u(i),s.push(i=[]),i.push({types:d,content:m[g]})}else a++,t.push(d),n.push(y),r.push(0),o.push(y.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return u(i),s}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component)},8206:function(e,t,n){"use strict";function r(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}return n.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus(),a}n.d(t,{Z:function(){return r}})}}]);
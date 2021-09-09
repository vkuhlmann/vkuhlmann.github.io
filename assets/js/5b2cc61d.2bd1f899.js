"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[8582],{4419:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return y}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=n(1866),i=n(6981),s=["components"],c={sidebar_position:6},u="Tables",p={unversionedId:"tables",id:"tables",isDocsHomePage:!1,title:"Tables",description:"Tables are created using the tabular environment. If you want a caption, the",source:"@site/latex/tables.md",sourceDirName:".",slug:"/tables",permalink:"/latex/tables",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Bibliography",permalink:"/latex/bibliography"}},d=[],m={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tables"},"Tables"),(0,a.kt)("p",null,"Tables are created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"tabular")," environment. If you want a caption, the\nfigure equivalent for tables is the ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," environment. You can use a ",(0,a.kt)(l.Z,{code:"\\caption",mdxType:"CodeInline"}),"\nwithin it."),(0,a.kt)("p",null,"After the ",(0,a.kt)(l.Z,{code:"\\begin{tabular}",mdxType:"CodeInline"})," you need to specify the columns. The example has\ntwo centered columns (",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"), followed by one with a fixed width, ",(0,a.kt)("inlineCode",{parentName:"p"},"p{2cm}"),"."),(0,a.kt)("p",null,"You separate rows by using ",(0,a.kt)("inlineCode",{parentName:"p"},"\\\\")," (the newline command) and columns within a row\nare separated using the ",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"-character. The ",(0,a.kt)(l.Z,{code:"\\toprule",mdxType:"CodeInline"}),", ",(0,a.kt)(l.Z,{code:"\\midrule",mdxType:"CodeInline"})," and ",(0,a.kt)(l.Z,{code:"\\bottomrule",mdxType:"CodeInline"}),"\nyield the horizontal rules. The ",(0,a.kt)(l.Z,{code:"\\cmidrule",mdxType:"CodeInline"})," is just like ",(0,a.kt)(l.Z,{code:"\\midrule",mdxType:"CodeInline"}),", but\nonly spans the columns indicated. Finally, there is the"),(0,a.kt)(l.Z,{code:"\\multicolumn",mdxType:"CodeInline"}),": multiple cells within the same row are merged together.",(0,a.kt)("p",null,"Required: ",(0,a.kt)(l.Z,{code:"\\usepackage{booktabs}",mdxType:"CodeInline"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\begin{table}[htbp]\n    \\centering\n    \\begin{tabular}{c c p{2cm}}\n        \\toprule\n        Getal 1 & Getal 2 & Notitie\\\\\n        \\cmidrule(lr){1-2}\\cmidrule(lr){3-3}\n        88 & 94 & Twee grote getallen\\\\\n        89 & 12 & Een grote en een kleintje\\\\\n        96 & 18 & Weer zo\\\\\n        32 & 98 & Iets minder schreef\\\\\n        \\midrule\n        \\multicolumn{2}{c}{527} & Totale som\\\\\n        \\bottomrule\n    \\end{tabular}\n    \\caption{Een tabel!}\n\\end{table}\n")),(0,a.kt)(i.Z,{src:"/assets/uavlatex/2_Tekstopmaak/tabellen2.svg",pad:!0,mdxType:"DocsImage"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Sometimes you need a fixed width for your table. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"tabularx")," from the\npackage ",(0,a.kt)(l.Z,{code:"\\usepackage{tabularx}",mdxType:"CodeInline"}),". The difference is the column\nspecifiers are preceded by a different argument: the table width."),(0,a.kt)("p",null,"Next, you can use, like in the example, column type ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),"; the columns will be\nstretched equally until the table has the appropriate width."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\begin{table}[htbp]\n    \\centering\n    \\begin{tabularx}{0.7\\textwidth}{X X}\n        \\toprule\n        Formule & Beschrijving\\\\\n        \\midrule\n        $ \\sqrt{2} $ & Wortel\\\\\n        $ \\frac{2}{3} $ & Breuk\\\\\n        $ 6\\geq 3 $ & Symbool\\\\\n        $ a^2 + b^2 $ & Superscript\\\\\n        \\bottomrule\n    \\end{tabularx}\n    \\caption{Een tabel!}\n\\end{table}\n")),(0,a.kt)(i.Z,{src:"/assets/uavlatex/2_Tekstopmaak/tabellen1.svg",pad:!0,mdxType:"DocsImage"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/LaTeX/Tables"},"More about tables on Wikibooks")))}y.isMDXComponent=!0},2924:function(e,t,n){var o=n(7294).createContext(void 0);t.Z=o},3583:function(e,t,n){n.d(t,{Z:function(){return l}});var o={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=n(5350),a=n(9443),l=function(){var e=(0,a.LU)().prism,t=(0,r.Z)().isDarkTheme,n=e.theme||o,l=e.darkTheme||n;return t?l:n}},2026:function(e,t,n){var o=n(7294),r=n(412),a=n(9443),l=(0,a.WA)("theme"),i="light",s="dark",c=function(e){return e===s?s:i},u=function(e){(0,a.WA)("theme").set(c(e))};t.Z=function(){var e=(0,a.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,p=e.respectPrefersColorScheme,d=(0,o.useState)(function(e){return r.Z.canUseDOM?c(document.documentElement.getAttribute("data-theme")):c(e)}(t)),m=d[0],y=d[1],h=(0,o.useCallback)((function(){y(i),u(i)}),[]),g=(0,o.useCallback)((function(){y(s),u(s)}),[]);return(0,o.useEffect)((function(){document.documentElement.setAttribute("data-theme",c(m))}),[m]),(0,o.useEffect)((function(){if(!n)try{var e=l.get();null!==e&&y(c(e))}catch(t){console.error(t)}}),[y]),(0,o.useEffect)((function(){n&&!p||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;y(t?s:i)}))}),[]),{isDarkTheme:m===s,setLightTheme:h,setDarkTheme:g}}},5350:function(e,t,n){var o=n(7294),r=n(2924);t.Z=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},1866:function(e,t,n){var o=n(7462),r=n(7294),a=n(4544),l=n(3583),i=n(6010);t.Z=function(e){var t,n,s=e.children,c=null!=(t=e.language)?t:"latex",u=null!=(n=e.code)?n:s.props.children,p=(0,l.Z)();return r.createElement(a.ZP,(0,o.Z)({},a.lG,{theme:p,code:u,language:c}),(function(t){var n=t.className,a=t.style,l=t.tokens,s=(t.getLineProps,t.getTokenProps);return r.createElement("code",{style:e.nobackdrop?{}:a,className:(0,i.Z)(n,c)},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");return r.createElement("span",(0,o.Z)({key:t},{}),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))})))})))}))}},6981:function(e,t,n){var o=n(7294),r=(n(2026),n(2924));t.Z=function(e){var t,n=e.src,a="0px";console.log("Pad parameter is "+e.pad),e.pad&&(a="15px");var l="hsl(0, 0%, 80%)";return(0,o.useContext)(r.Z).isDarkTheme||(l="hsl(0, 0%, 100%)"),o.createElement("div",{style:{backgroundColor:l,marginBottom:"10px"}},o.createElement("img",{src:n,style:(t={padding:a,width:"90%"},t.width="calc(100% - ("+a+")*2)",t)}))}},4544:function(e,t,n){n.d(t,{ZP:function(){return y},lG:function(){return l}});var o=n(7410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(7294),l={Prism:o.Z,theme:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,i=[],s=[i];l>-1;){for(;(a=o[l]++)<r[l];){var d=void 0,m=t[l],y=n[l][a];if("string"==typeof y?(m=l>0?m:["plain"],d=y):(m=p(m,y.type),y.alias&&(m=p(m,y.alias)),d=y.content),"string"==typeof d){var h=d.split(c),g=h.length;i.push({types:m,content:h[0]});for(var f=1;f<g;f++)u(i),s.push(i=[]),i.push({types:m,content:h[f]})}else l++,t.push(m),n.push(d),o.push(0),r.push(d.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return u(i),s}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);
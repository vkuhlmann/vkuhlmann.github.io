"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[804],{1737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(613),s=n(6621),c=["components"],l={sidebar_position:9},u="Counters",p={unversionedId:"counters",id:"counters",isDocsHomePage:!1,title:"Counters",description:"Within 'counters', LaTeX keeps track of numberings, like automatic title",source:"@site/latex/counters.md",sourceDirName:".",slug:"/counters",permalink:"/latex/counters",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Code 1",permalink:"/latex/vakidioot/code1"}},d=[{value:"Inspection",id:"inspection",children:[]},{value:"Manipulation",id:"manipulation",children:[]},{value:"Formatting",id:"formatting",children:[]},{value:"Counterwithin",id:"counterwithin",children:[]},{value:"Available counters",id:"available-counters",children:[]},{value:"More to be added later",id:"more-to-be-added-later",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"counters"},"Counters"),(0,a.kt)("p",null,"Within 'counters', LaTeX keeps track of numberings, like automatic title\nnumbering and numbering of equations."),(0,a.kt)("h2",{id:"inspection"},"Inspection"),(0,a.kt)("p",null,"The current value of the ",(0,a.kt)(i.Z,{code:"subsection",mdxType:"CodeInline"}),"-counter can be printed\nin your document with ",(0,a.kt)(i.Z,{code:"\\arabic{subsection}",mdxType:"CodeInline"}),". However, this will always print\nthe number in arabic numbers, but you might want to put it in roman numbers for example, or prepend\nthe current section number or add diferent formatting. This formatting is done by ",(0,a.kt)(i.Z,{code:"\\thesubsection",mdxType:"CodeInline"}),"."),(0,a.kt)("p",null,"See the following demo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\section{AA}\nCounters: \\thesubsection,\n\\arabic{subsection}, \\roman{subsection}\n\n\\subsection{BB}\nCounters: \\thesubsection,\n\\arabic{subsection}, \\roman{subsection}\n\n\\subsection{CC}\nCounters: \\thesubsection,\n\\arabic{subsection}, \\roman{subsection}\n")),(0,a.kt)(s.Z,{src:"/assets/latex/counters/inspect-thesubsection.svg",pad:!0,mdxType:"DocsImage"}),(0,a.kt)("h2",{id:"manipulation"},"Manipulation"),(0,a.kt)("p",null,"You can change the value of the counter with ",(0,a.kt)(i.Z,{code:"\\setcounter",mdxType:"CodeInline"}),"\nand ",(0,a.kt)(i.Z,{code:"\\addtocounter",mdxType:"CodeInline"}),": first you pass the name of the counter,\nfollowed by the new value or the amount to be added."),(0,a.kt)(s.Z,{src:"/assets/latex/counters/manipulate-thesubsection.svg",pad:!0,mdxType:"DocsImage"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\section{AA}\n\\setcounter{section}{9}\n\n\\subsection{BB}\n\\addtocounter{subsection}{-4}\nsubsection: \\arabic{subsection}\n\n\\subsection{CC}\n")),(0,a.kt)("p",null,"Title numbering doesn't use ",(0,a.kt)(i.Z,{code:"\\addtocounter{section}{1}",mdxType:"CodeInline"})," directly,\nbut ",(0,a.kt)(i.Z,{code:"\\refstepcounter",mdxType:"CodeInline"}),". This increments the counter, but also resets\nthe subsection counter, meaning you don't get 1, 1.1, 1.2, 2, 2.",(0,a.kt)("span",{style:{textDecoration:"underline"}},"3"),", but 1, 1.1, 1.2, 2, 2.",(0,a.kt)("span",{style:{textDecoration:"underline"}},"1"),".\nIt also arranges that ",(0,a.kt)(i.Z,{code:"\\label",mdxType:"CodeInline"})," and ",(0,a.kt)(i.Z,{code:"\\ref",mdxType:"CodeInline"}),"\nfunction properly."),(0,a.kt)("p",null,"Spare the formatting, you're now able to simulate ",(0,a.kt)(i.Z,{code:"\\section",mdxType:"CodeInline"}),"\nand ",(0,a.kt)(i.Z,{code:"\\subsection",mdxType:"CodeInline"}),"."),(0,a.kt)(s.Z,{src:"/assets/latex/counters/manipulate-refstepcounter.svg",pad:!0,mdxType:"DocsImage"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\refstepcounter{section}\n\\label{sec:AA}\n\\textbf{\\thesection, AA}\n\n\\refstepcounter{subsection}\n\\textbf{\\thesubsection, BB}\n\n\\refstepcounter{subsection}\n\\label{sec:CC}\n\\textbf{\\thesubsection, CC}\n\n\\refstepcounter{section}\n\\textbf{\\thesection, DD}\n\nZie Paragraaf \\ref{sec:AA} en\nDeelparagraaf \\ref{sec:CC}.\n\n\\refstepcounter{subsection}\n\\textbf{\\thesubsection, DD}\n")),(0,a.kt)("h2",{id:"formatting"},"Formatting"),(0,a.kt)("p",null,"With ",(0,a.kt)(i.Z,{code:"\\meaning\\thesubsection",mdxType:"CodeInline"})," you can see how the formatting works:\nthe command ",(0,a.kt)(i.Z,{code:"\\thesubsection",mdxType:"CodeInline"})," evaluates to ",(0,a.kt)(i.Z,{code:"\\thesection.\\@arabic\\c@subsection",mdxType:"CodeInline"}),",\nwhich is equivalent to ",(0,a.kt)(i.Z,{code:"\\thesection.\\arabic{subsection}",mdxType:"CodeInline"}),"."),(0,a.kt)("p",null,"If you now use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\renewcommand\\thesubsection\n{(\\thesection)\\alph{subsection}}\n")),(0,a.kt)("p",null,"then 2.1 becomes (2)a and 5.3 becomes (5)c."),(0,a.kt)("h2",{id:"counterwithin"},"Counterwithin"),(0,a.kt)("p",null,"We just saw how you can change a number's formatting using ",(0,a.kt)(i.Z,{code:"\\renewcommand",mdxType:"CodeInline"}),".\nYou could use this for example to preprend the equation number with the current ",(0,a.kt)("inlineCode",{parentName:"p"},"section"),"-number. That\nresults in"),(0,a.kt)(s.Z,{src:"/assets/latex/counters/counterwithin-equation.svg",pad:!0,mdxType:"DocsImage"}),(0,a.kt)("p",null,"But after a ",(0,a.kt)(i.Z,{code:"\\section",mdxType:"CodeInline"}),", the equation number just continues, so the next\nequation would be ",(0,a.kt)("inlineCode",{parentName:"p"},"(3.20)")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"(3.1)"),". As we have seen, ",(0,a.kt)(i.Z,{code:"\\refstepcounter",mdxType:"CodeInline"}),"\ncan perform automatic number resets, like it does for ",(0,a.kt)("inlineCode",{parentName:"p"},"subsection"),"-numbers. To enable the\nsame feature for equations, we need to specify ",(0,a.kt)(i.Z,{code:"\\counterwithin*{equation}{section}",mdxType:"CodeInline"}),"."),(0,a.kt)("p",null,"You can also use ",(0,a.kt)(i.Z,{code:"\\counterwithin",mdxType:"CodeInline"})," (without the star), which\ndoes everything automatically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\counterwithin{equation}{section}\n% is equivalent to:\n\\counterwithin*{equation}{section}\n\\renewcommand\\theequation\n{\\thesection.\\arabic{equation}}\n")),(0,a.kt)("p",null,"To remove a counter from the reset list, you can use \\hll|\\counterwithout*|.\nWithout the star, the formatting itself will also be reset."),(0,a.kt)("h2",{id:"available-counters"},"Available counters"),(0,a.kt)("p",null,"To list the counters which are by default defined, add the following code into\nyour document:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"{\\makeatletter\n\\def\\@elt #1{#1; }\n\\cl@@ckpt}\n")),(0,a.kt)("p",null,"It will print something like"),(0,a.kt)("p",null,"page; equation; enumi; enumii; enumiii; enumiv; footnote; mpfootnote; part; section; subsection;subsubsection; paragraph; subparagraph; figure; table; parentequation"),(0,a.kt)("h2",{id:"more-to-be-added-later"},"More to be added later"))}h.isMDXComponent=!0},448:function(e,t,n){n.d(t,{Z:function(){return i}});var o={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=n(6758),a=n(4311),i=function(){var e=(0,a.LU)().prism,t=(0,r.Z)().isDarkTheme,n=e.theme||o,i=e.darkTheme||n;return t?i:n}},9241:function(e,t,n){var o=n(7294),r=n(8262),a=n(4311),i=(0,a.WA)("theme"),s="light",c="dark",l=function(e){return e===c?c:s},u=function(e){(0,a.WA)("theme").set(l(e))};t.Z=function(){var e=(0,a.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,p=e.respectPrefersColorScheme,d=(0,o.useState)(function(e){return r.Z.canUseDOM?l(document.documentElement.getAttribute("data-theme")):l(e)}(t)),m=d[0],h=d[1],y=(0,o.useCallback)((function(){h(s),u(s)}),[]),f=(0,o.useCallback)((function(){h(c),u(c)}),[]);return(0,o.useEffect)((function(){document.documentElement.setAttribute("data-theme",l(m))}),[m]),(0,o.useEffect)((function(){if(!n)try{var e=i.get();null!==e&&h(l(e))}catch(t){console.error(t)}}),[h]),(0,o.useEffect)((function(){n&&!p||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?c:s)}))}),[]),{isDarkTheme:m===c,setLightTheme:y,setDarkTheme:f}}},613:function(e,t,n){var o=n(7462),r=n(7294),a=n(4544),i=n(448),s=n(6010);t.Z=function(e){var t,n,c=e.children,l=null!=(t=e.language)?t:"latex",u=null!=(n=e.code)?n:c.props.children,p=(0,i.Z)();return r.createElement(a.ZP,(0,o.Z)({},a.lG,{theme:p,code:u,language:l}),(function(t){var n=t.className,a=t.style,i=t.tokens,c=(t.getLineProps,t.getTokenProps);return r.createElement("code",{style:e.nobackdrop?{}:a,className:(0,s.Z)(n,l)},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");return r.createElement("span",(0,o.Z)({key:t},{}),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))})))})))}))}},6621:function(e,t,n){var o=n(7294),r=(n(9241),n(9882));t.Z=function(e){var t,n=e.src,a="0px";e.pad&&(a="15px");var i="hsl(0, 0%, 80%)";return(0,o.useContext)(r.Z).isDarkTheme||(i="hsl(0, 0%, 100%)"),o.createElement("div",{style:{backgroundColor:i,marginBottom:"10px"}},o.createElement("img",{src:n,style:(t={padding:a,width:"90%"},t.width="calc(100% - ("+a+")*2)",t)}))}},4544:function(e,t,n){n.d(t,{ZP:function(){return h},lG:function(){return i}});var o=n(7410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(7294),i={Prism:o.Z,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=c({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?c({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=c({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?c({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,m=t[i],h=n[i][a];if("string"==typeof h?(m=i>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var y=d.split(l),f=y.length;s.push({types:m,content:y[0]});for(var b=1;b<f;b++)u(s),c.push(s=[]),s.push({types:m,content:y[b]})}else i++,t.push(m),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return u(s),c}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);
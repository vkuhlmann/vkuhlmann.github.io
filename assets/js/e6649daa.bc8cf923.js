"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[804],{21737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=n(20613),s=n(16621),c=["components"],u={sidebar_position:9},l="Counters",p={unversionedId:"counters",id:"counters",isDocsHomePage:!1,title:"Counters",description:"Within 'counters', LaTeX keeps track of numberings, like automatic title",source:"@site/latex/counters.md",sourceDirName:".",slug:"/counters",permalink:"/latex/counters",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Code 1",permalink:"/latex/vakidioot/code1"},next:{title:"Whitespace",permalink:"/latex/whitespace"}},d=[{value:"Inspection",id:"inspection",children:[]},{value:"Manipulation",id:"manipulation",children:[]},{value:"Formatting",id:"formatting",children:[]},{value:"Counterwithin",id:"counterwithin",children:[]},{value:"Available counters",id:"available-counters",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"counters"},"Counters"),(0,r.kt)("p",null,"Within 'counters', LaTeX keeps track of numberings, like automatic title\nnumbering and numbering of equations."),(0,r.kt)("h2",{id:"inspection"},"Inspection"),(0,r.kt)("p",null,"The current value of the ",(0,r.kt)(a.Z,{code:"subsection",mdxType:"CodeInline"}),"-counter can be printed\nin your document with ",(0,r.kt)(a.Z,{code:"\\arabic{subsection}",mdxType:"CodeInline"}),". However, this will always print\nthe number in arabic numbers, but you might want to put it in roman numbers for example, or prepend\nthe current section number or add diferent formatting. This formatting is done by ",(0,r.kt)(a.Z,{code:"\\thesubsection",mdxType:"CodeInline"}),"."),(0,r.kt)("p",null,"See the following demo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\section{AA}\nCounters: \\thesubsection,\n\\arabic{subsection}, \\roman{subsection}\n\n\\subsection{BB}\nCounters: \\thesubsection,\n\\arabic{subsection}, \\roman{subsection}\n\n\\subsection{CC}\nCounters: \\thesubsection,\n\\arabic{subsection}, \\roman{subsection}\n")),(0,r.kt)(s.Z,{src:"/assets/latex/counters/inspect-thesubsection.svg",pad:!0,mdxType:"DocsImage"}),(0,r.kt)("h2",{id:"manipulation"},"Manipulation"),(0,r.kt)("p",null,"You can change the value of the counter with ",(0,r.kt)(a.Z,{code:"\\setcounter",mdxType:"CodeInline"}),"\nand ",(0,r.kt)(a.Z,{code:"\\addtocounter",mdxType:"CodeInline"}),": first you pass the name of the counter,\nfollowed by the new value or the amount to be added."),(0,r.kt)(s.Z,{src:"/assets/latex/counters/manipulate-thesubsection.svg",pad:!0,mdxType:"DocsImage"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\section{AA}\n\\setcounter{section}{9}\n\n\\subsection{BB}\n\\addtocounter{subsection}{-4}\nsubsection: \\arabic{subsection}\n\n\\subsection{CC}\n")),(0,r.kt)("p",null,"Title numbering doesn't use ",(0,r.kt)(a.Z,{code:"\\addtocounter{section}{1}",mdxType:"CodeInline"})," directly,\nbut ",(0,r.kt)(a.Z,{code:"\\refstepcounter",mdxType:"CodeInline"}),". This increments the counter, but also resets\nthe subsection counter, meaning you don't get 1, 1.1, 1.2, 2, 2.",(0,r.kt)("span",{style:{textDecoration:"underline"}},"3"),", but 1, 1.1, 1.2, 2, 2.",(0,r.kt)("span",{style:{textDecoration:"underline"}},"1"),".\nIt also arranges that ",(0,r.kt)(a.Z,{code:"\\label",mdxType:"CodeInline"})," and ",(0,r.kt)(a.Z,{code:"\\ref",mdxType:"CodeInline"}),"\nfunction properly."),(0,r.kt)("p",null,"Spare the formatting, you're now able to simulate ",(0,r.kt)(a.Z,{code:"\\section",mdxType:"CodeInline"}),"\nand ",(0,r.kt)(a.Z,{code:"\\subsection",mdxType:"CodeInline"}),"."),(0,r.kt)(s.Z,{src:"/assets/latex/counters/manipulate-refstepcounter.svg",pad:!0,mdxType:"DocsImage"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\refstepcounter{section}\n\\label{sec:AA}\n\\textbf{\\thesection, AA}\n\n\\refstepcounter{subsection}\n\\textbf{\\thesubsection, BB}\n\n\\refstepcounter{subsection}\n\\label{sec:CC}\n\\textbf{\\thesubsection, CC}\n\n\\refstepcounter{section}\n\\textbf{\\thesection, DD}\n\nZie Paragraaf \\ref{sec:AA} en\nDeelparagraaf \\ref{sec:CC}.\n\n\\refstepcounter{subsection}\n\\textbf{\\thesubsection, DD}\n")),(0,r.kt)("h2",{id:"formatting"},"Formatting"),(0,r.kt)("p",null,"With ",(0,r.kt)(a.Z,{code:"\\meaning\\thesubsection",mdxType:"CodeInline"})," you can see how the formatting works:\nthe command ",(0,r.kt)(a.Z,{code:"\\thesubsection",mdxType:"CodeInline"})," evaluates to ",(0,r.kt)(a.Z,{code:"\\thesection.\\@arabic\\c@subsection",mdxType:"CodeInline"}),",\nwhich is equivalent to ",(0,r.kt)(a.Z,{code:"\\thesection.\\arabic{subsection}",mdxType:"CodeInline"}),"."),(0,r.kt)("p",null,"If you now use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\renewcommand\\thesubsection\n{(\\thesection)\\alph{subsection}}\n")),(0,r.kt)("p",null,"then 2.1 becomes (2)a and 5.3 becomes (5)c."),(0,r.kt)("h2",{id:"counterwithin"},"Counterwithin"),(0,r.kt)("p",null,"We just saw how you can change a number's formatting using ",(0,r.kt)(a.Z,{code:"\\renewcommand",mdxType:"CodeInline"}),".\nYou could use this for example to preprend the equation number with the current ",(0,r.kt)("inlineCode",{parentName:"p"},"section"),"-number. That\nresults in"),(0,r.kt)(s.Z,{src:"/assets/latex/counters/counterwithin-equation.svg",pad:!0,mdxType:"DocsImage"}),(0,r.kt)("p",null,"But after a ",(0,r.kt)(a.Z,{code:"\\section",mdxType:"CodeInline"}),", the equation number just continues, so the next\nequation would be ",(0,r.kt)("inlineCode",{parentName:"p"},"(3.20)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"(3.1)"),". As we have seen, ",(0,r.kt)(a.Z,{code:"\\refstepcounter",mdxType:"CodeInline"}),"\ncan perform automatic number resets, like it does for ",(0,r.kt)("inlineCode",{parentName:"p"},"subsection"),"-numbers. To enable the\nsame feature for equations, we need to specify ",(0,r.kt)(a.Z,{code:"\\counterwithin*{equation}{section}",mdxType:"CodeInline"}),"."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)(a.Z,{code:"\\counterwithin",mdxType:"CodeInline"})," (without the star), which\ndoes everything automatically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\counterwithin{equation}{section}\n% is equivalent to:\n\\counterwithin*{equation}{section}\n\\renewcommand\\theequation\n{\\thesection.\\arabic{equation}}\n")),(0,r.kt)("p",null,"To remove a counter from the reset list, you can use ",(0,r.kt)(a.Z,{code:"\\counterwithout*",mdxType:"CodeInline"}),".\nWithout the star, the formatting itself will also be reset."),(0,r.kt)("h2",{id:"available-counters"},"Available counters"),(0,r.kt)("p",null,"To list the counters which are by default defined, add the following code into\nyour document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"{\\makeatletter\n\\def\\@elt #1{#1; }\n\\cl@@ckpt}\n")),(0,r.kt)("p",null,"It will print something like"),(0,r.kt)("p",null,"page; equation; enumi; enumii; enumiii; enumiv; footnote; mpfootnote; part; section; subsection;subsubsection; paragraph; subparagraph; figure; table; parentequation"))}h.isMDXComponent=!0},20613:function(e,t,n){var o=n(83117),i=n(67294),r=n(24544),a=n(90448),s=n(86010);t.Z=function(e){var t,n,c=e.children,u=null!=(t=e.language)?t:"latex",l=null!=(n=e.code)?n:c.props.children,p=(0,a.Z)();return i.createElement(r.ZP,(0,o.Z)({},r.lG,{theme:p,code:l,language:u}),(function(t){var n=t.className,r=t.style,a=t.tokens,c=(t.getLineProps,t.getTokenProps);return i.createElement("code",{style:e.nobackdrop?{}:r,className:(0,s.Z)(n,u)},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");return i.createElement("span",(0,o.Z)({key:t},{}),e.map((function(e,t){return i.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))})))})))}))}},16621:function(e,t,n){var o=n(67294),i=(n(49241),n(99882));t.Z=function(e){var t,n=e.src,r="0px";e.pad&&(r="15px");var a="hsl(0, 0%, 80%)";return(0,o.useContext)(i.Z).isDarkTheme||(a="hsl(0, 0%, 100%)"),o.createElement("div",{style:{backgroundColor:a,marginBottom:"10px"}},o.createElement("img",{src:n,style:(t={padding:r,width:"90%"},t.width="calc(100% - ("+r+")*2)",t)}))}},24544:function(e,t,n){n.d(t,{ZP:function(){return h},lG:function(){return a}});var o=n(87410),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(67294),a={Prism:o.Z,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,l=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),i=e.styles.reduce((function(e,n){var o=n.languages,i=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],i);e[t]=n})),e}),o);return i.root=n,i.plain=c({},n,{backgroundColor:null}),i};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,i=e.style,r=c({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(r.style=a.plain),void 0!==i&&(r.style=void 0!==r.style?c({},r.style,i):i),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,i=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===i&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===i&&!o)return r[n[0]];var a=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[a].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,i=e.style,r=e.token,a=c({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==i&&(a.style=void 0!==a.style?c({},a.style,i):i),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"tokenize",(function(e,t,n,o){var i={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",i);var r=i.tokens=e.tokenize(i.code,i.grammar,i.language);return e.hooks.run("after-tokenize",i),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,i=e.children,r=this.getThemeDict(this.props),a=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],o=[0],i=[e.length],r=0,a=0,s=[],c=[s];a>-1;){for(;(r=o[a]++)<i[a];){var d=void 0,m=t[a],h=n[a][r];if("string"==typeof h?(m=a>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var y=d.split(u),f=y.length;s.push({types:m,content:y[0]});for(var k=1;k<f;k++)l(s),c.push(s=[]),s.push({types:m,content:y[k]})}else a++,t.push(m),n.push(d),o.push(0),i.push(d.length)}a--,t.pop(),n.pop(),o.pop(),i.pop()}return l(s),c}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)}}]);
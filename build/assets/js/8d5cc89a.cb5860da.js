"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[3090],{9036:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(20613),s=n(16621),l=["components"],c={sidebar_position:1},p="Exercises of part 1",u={unversionedId:"exercises/2021-09-GSNS/part1",id:"exercises/2021-09-GSNS/part1",isDocsHomePage:!1,title:"Exercises of part 1",description:"First document",source:"@site/latex/exercises/2021-09-GSNS/part1.md",sourceDirName:"exercises/2021-09-GSNS",slug:"/exercises/2021-09-GSNS/part1",permalink:"/latex/exercises/2021-09-GSNS/part1",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Config wizard",permalink:"/latex/configuration/configwizard"},next:{title:"Exercises of part 2",permalink:"/latex/exercises/2021-09-GSNS/part2"}},d=[{value:"First document",id:"first-document",children:[]},{value:"Headings",id:"headings",children:[]},{value:"Page margins",id:"page-margins",children:[]},{value:"Use fancyhdr",id:"use-fancyhdr",children:[]},{value:"Text with symbols",id:"text-with-symbols",children:[]},{value:"Rainbow colors",id:"rainbow-colors",children:[]},{value:"Quotes",id:"quotes",children:[]},{value:"Hyperref",id:"hyperref",children:[]}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercises-of-part-1"},"Exercises of part 1"),(0,r.kt)("h3",{id:"first-document"},"First document"),(0,r.kt)("p",null,"Create a document with a title and a first line of text. Set the author to be\nyour name."),(0,r.kt)("h3",{id:"headings"},"Headings"),(0,r.kt)("p",null,"Create headings at different depths, and create a table of contents for it.\nThe table of contents should be on its own page, or on be on a page with just\nthe title."),(0,r.kt)("h3",{id:"page-margins"},"Page margins"),(0,r.kt)("p",null,"Set the left and right margins to be 2.54 cm, and the top and bottom margins\nto be both 4 cm. (Just as exercise, might look ugly.)"),(0,r.kt)("h3",{id:"use-fancyhdr"},"Use fancyhdr"),(0,r.kt)("p",null,"Make your page look more fancy by adding in your preamble"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage{fancyhdr}\n\\pagestyle{fancy}\n")),(0,r.kt)("p",null,"You need more than one page of text to witness the effect. You can add ",(0,r.kt)(i.Z,{code:"\\usepackage{lipsum}",mdxType:"CodeInline"}),"\nto your preamble and use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\lipsum[1-12]")," to create twelve paragraphs of nonsense\ntext. Do you see the effect now?"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For doing more with the ",(0,r.kt)("inlineCode",{parentName:"p"},"fancyhdr")," package, check out their manual, at\n",(0,r.kt)("a",{parentName:"p",href:"https://ctan.org/pkg/fancyhdr"},"the CTAN fancyhdr page"),". Check the 'A simple\nexample' section at page 9 to 10."))),(0,r.kt)("h3",{id:"text-with-symbols"},"Text with symbols"),(0,r.kt)("p",null,"Produce the following text with LaTeX:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"When I woke up this morning, the temperature in my room was 13\xb0C with 75%\nhumidity. I wrote down this data on my C:\\ drive, in a file called\ntemp_room.txt. That morning the dollar-to-euro exchange rate was $1.00 is \u20ac0.84.")),(0,r.kt)("p",null,"(You don't need to typeset it in italics.) It might be a good idea to compile\nafter every special symbol added, to see if it works. Or use the debug strategy\nusing comments."),(0,r.kt)("p",null,"Reference material:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"\\textdegree")," instead of pasting in a celsius symbol. ",(0,r.kt)("a",{parentName:"li",href:"https://www.overleaf.com/learn/latex/Questions/How_can_I_write_a_%C2%B0_(degree)_symbol_in_LaTeX%3F"},"Overleaf on the degree symbol")),(0,r.kt)("li",{parentName:"ul"},"My slides for typing special characters literally"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"\\usepackage{lmodern}")," for a nicer euro symbol. ",(0,r.kt)("a",{parentName:"li",href:"https://tex.stackexchange.com/questions/9866/latest-advice-on-the-euro-symbol"},"LaTeX Stack Exchange on the euro symbol")),(0,r.kt)("li",{parentName:"ul"},"For special characters it is often advisable to use ",(0,r.kt)("inlineCode",{parentName:"li"},"\\usepackage[utf8]{inputenc}")),(0,r.kt)("li",{parentName:"ul"},"These references might advise you to use ",(0,r.kt)("inlineCode",{parentName:"li"},"\\usepackage{textcomp}"),", but as the\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ctan.org/pkg/textcomp"},"CTAN textcomp page")," says, this package is\nnow included by default. ",(0,r.kt)("strong",{parentName:"li"},"You don't need to add ",(0,r.kt)("inlineCode",{parentName:"strong"},"\\usepackage{textcomp}"),"!"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure the output shows ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\ drive"),", with the backslash, and with the space!"))),(0,r.kt)("h3",{id:"rainbow-colors"},"Rainbow colors"),(0,r.kt)("p",null,"Create this shiny rainbow. The rainbow colors are red, orange, yellow, green,\nblue, indigo and violet. However, indigo isn't by default defined. There are\nmany ways to get this color, but I used the definition from ",(0,r.kt)("a",{parentName:"p",href:"http://latexcolor.com/"},"latexcolor.com"),".\nSpecifically, I used their ",(0,r.kt)("inlineCode",{parentName:"p"},"\\definecolor")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"indigo(dye)"),"."),(0,r.kt)(s.Z,{src:"/assets/latex/rainbow_scratch68.svg",mdxType:"DocsImage"}),(0,r.kt)("p",null,"Note you need a new ",(0,r.kt)("inlineCode",{parentName:"p"},"\\textcolor")," for each letter, and that ",(0,r.kt)("inlineCode",{parentName:"p"},"\\textcolor")," is defined\nby ",(0,r.kt)("inlineCode",{parentName:"p"},"\\usepackage{xcolor}"),". The code can become very unreadable by putting everything\non a single line, instead try to put each ",(0,r.kt)("inlineCode",{parentName:"p"},"\\textcolor...")," on a separate line.\nBut avoid getting spaces between the letters!"),(0,r.kt)("h3",{id:"quotes"},"Quotes"),(0,r.kt)("p",null,"Produce"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'I ask "Where have you been?" everytime I see him.')),(0,r.kt)("p",null,"Where the quotes should be the right way around. If you add ",(0,r.kt)("inlineCode",{parentName:"p"},"\\usepackage[english]{babel}"),",\ncan you see why you can't use the double quote from your keyboard ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," for closing\nthe quotation?"),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\usepackage{csquotes}"),", and quote text with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"\\enquote{Text}")," command. Observe how the style changes when setting the babel\nlanguage to ",(0,r.kt)("inlineCode",{parentName:"p"},"french"),". For nicer french quotes, add "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[T1]{fontenc}\n\\usepackage{lmodern}\n")),(0,r.kt)("p",null,"to your preamble."),(0,r.kt)("h3",{id:"hyperref"},"Hyperref"),(0,r.kt)("p",null,"Go to the package manual of hyperref and see what you can do with it."))}m.isMDXComponent=!0},20613:function(e,t,n){var a=n(83117),o=n(67294),r=n(24544),i=n(90448),s=n(86010);t.Z=function(e){var t,n,l=e.children,c=null!=(t=e.language)?t:"latex",p=null!=(n=e.code)?n:l.props.children,u=(0,i.Z)();return o.createElement(r.ZP,(0,a.Z)({},r.lG,{theme:u,code:p,language:c}),(function(t){var n=t.className,r=t.style,i=t.tokens,l=(t.getLineProps,t.getTokenProps);return o.createElement("code",{style:e.nobackdrop?{}:r,className:(0,s.Z)(n,c)},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");return o.createElement("span",(0,a.Z)({key:t},{}),e.map((function(e,t){return o.createElement("span",(0,a.Z)({key:t},l({token:e,key:t})))})))})))}))}},16621:function(e,t,n){var a=n(67294),o=(n(49241),n(99882));t.Z=function(e){var t,n=e.src,r="0px";e.pad&&(r="15px");var i="hsl(0, 0%, 80%)";return(0,a.useContext)(o.Z).isDarkTheme||(i="hsl(0, 0%, 100%)"),a.createElement("div",{style:{backgroundColor:i,marginBottom:"10px"}},a.createElement("img",{src:n,style:(t={padding:r,width:"90%"},t.width="calc(100% - ("+r+")*2)",t)}))}},24544:function(e,t,n){n.d(t,{ZP:function(){return m},lG:function(){return i}});var a=n(87410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(67294),i={Prism:a.Z,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=l({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==o&&(r.style=void 0!==r.style?l({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var i=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,i=l({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,i=0,s=[],l=[s];i>-1;){for(;(r=a[i]++)<o[i];){var d=void 0,h=t[i],m=n[i][r];if("string"==typeof m?(h=i>0?h:["plain"],d=m):(h=u(h,m.type),m.alias&&(h=u(h,m.alias)),d=m.content),"string"==typeof d){var g=d.split(c),y=g.length;s.push({types:h,content:g[0]});for(var k=1;k<y;k++)p(s),l.push(s=[]),s.push({types:h,content:g[k]})}else i++,t.push(h),n.push(d),a.push(0),o.push(d.length)}i--,t.pop(),n.pop(),a.pop(),o.pop()}return p(s),l}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)}}]);
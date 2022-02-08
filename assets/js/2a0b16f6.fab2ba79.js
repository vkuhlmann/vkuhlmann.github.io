"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[6401],{9818:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(613),n(6621),["components"]),s={sidebar_position:2},l="Exercises of part 2",p={unversionedId:"exercises/2022-02-GSNS/part2",id:"exercises/2022-02-GSNS/part2",isDocsHomePage:!1,title:"Exercises of part 2",description:"Figure environment",source:"@site/latex/exercises/2022-02-GSNS/part2.md",sourceDirName:"exercises/2022-02-GSNS",slug:"/exercises/2022-02-GSNS/part2",permalink:"/latex/exercises/2022-02-GSNS/part2",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Exercises of part 1",permalink:"/latex/exercises/2022-02-GSNS/part1"},next:{title:"Example of a good preamble setup",permalink:"/latex/example"}},c=[{value:"Figure environment",id:"figure-environment",children:[]},{value:"Figure trimming",id:"figure-trimming",children:[]},{value:"Formulas",id:"formulas",children:[]},{value:"Subfigure",id:"subfigure",children:[]},{value:"Maths",id:"maths",children:[]},{value:"Tables",id:"tables",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercises-of-part-2"},"Exercises of part 2"),(0,i.kt)("h3",{id:"figure-environment"},"Figure environment"),(0,i.kt)("p",null,"Find a nice image on the internet and put it in the same directory as your\n",(0,i.kt)("inlineCode",{parentName:"p"},".tex")," file. Add this figure in your document with a proper caption beneath it."),(0,i.kt)("p",null,"Use the package ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage{lipsum}")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"\\lipsum[1-12]")," for nonsense text,\nor copy some from ",(0,i.kt)("inlineCode",{parentName:"p"},"lipsum.com"),". Observe how the different placement specifiers\nchange the positioning of the figure with respect to the text."),(0,i.kt)("h3",{id:"figure-trimming"},"Figure trimming"),(0,i.kt)("p",null,"You can crop an image from within LaTeX by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"trim")," option to\n",(0,i.kt)("inlineCode",{parentName:"p"},"\\includegraphics"),". Try using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\includegraphics[width=0.9\\linewidth,trim=10pt 10pt 10pt 10pt,clip]{example-image-a}\n")),(0,i.kt)("p",null,"and observe how changing the values after trim change the cropping. Make sure\nyou have added ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage{graphicx}")," to your preamble!"),(0,i.kt)("p",null,"Reference material:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ctan.org/pkg/graphicx"},"CTAN graphicx page"))),(0,i.kt)("h3",{id:"formulas"},"Formulas"),(0,i.kt)("p",null,"Create the normal distribution density function."),(0,i.kt)("h3",{id:"subfigure"},"Subfigure"),(0,i.kt)("p",null,"Try the subfigure example from the slides."),(0,i.kt)("h3",{id:"maths"},"Maths"),(0,i.kt)("p",null,"Go to the slides about the math commands, try them out and try to remember some.\nYou can also investigate what LaTeX commands you need for the math symbols\nyou regularly use."),(0,i.kt)("h3",{id:"tables"},"Tables"),(0,i.kt)("p",null,"Figures aren't the only floats, there are also tables. Follow the tutorial\nat ",(0,i.kt)("a",{parentName:"p",href:"/latex/tables"},"Tables"),"."))}m.isMDXComponent=!0},613:function(e,t,n){var r=n(7462),a=n(7294),i=n(4544),o=n(448),s=n(6010);t.Z=function(e){var t,n,l=e.children,p=null!=(t=e.language)?t:"latex",c=null!=(n=e.code)?n:l.props.children,u=(0,o.Z)();return a.createElement(i.ZP,(0,r.Z)({},i.lG,{theme:u,code:c,language:p}),(function(t){var n=t.className,i=t.style,o=t.tokens,l=(t.getLineProps,t.getTokenProps);return a.createElement("code",{style:e.nobackdrop?{}:i,className:(0,s.Z)(n,p)},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");return a.createElement("span",(0,r.Z)({key:t},{}),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))})))})))}))}},6621:function(e,t,n){var r=n(7294),a=(n(9241),n(9882));t.Z=function(e){var t,n=e.src,i="0px";e.pad&&(i="15px");var o="hsl(0, 0%, 80%)";return(0,r.useContext)(a.Z).isDarkTheme||(o="hsl(0, 0%, 100%)"),r.createElement("div",{style:{backgroundColor:o,marginBottom:"10px"}},r.createElement("img",{src:n,style:(t={padding:i,width:"90%"},t.width="calc(100% - ("+i+")*2)",t)}))}},4544:function(e,t,n){n.d(t,{ZP:function(){return d},lG:function(){return o}});var r=n(7410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=n(7294),o={Prism:r.Z,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var d=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,i=l({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(i.style=o.plain),void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return i[n[0]];var o=r?{display:"inline-block"}:{},s=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[o].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,i=e.token,o=l({},h(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?l({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var i=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,i=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],i=0,o=0,s=[],l=[s];o>-1;){for(;(i=r[o]++)<a[o];){var m=void 0,h=t[o],d=n[o][i];if("string"==typeof d?(h=o>0?h:["plain"],m=d):(h=u(h,d.type),d.alias&&(h=u(h,d.alias)),m=d.content),"string"==typeof m){var g=m.split(p),y=g.length;s.push({types:h,content:g[0]});for(var f=1;f<y;f++)c(s),l.push(s=[]),s.push({types:h,content:g[f]})}else o++,t.push(h),n.push(m),r.push(0),a.push(m.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return c(s),l}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component)}}]);
(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[1710],{5246:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(3366),a=n(7294),l=n(6010),i=n(9930),o=n(33),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",h=n(1242);function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var g=n(3599),v=["sidebar","toc","children"];var y=function(e){var t=e.sidebar,n=e.toc,o=e.children,s=(0,r.Z)(e,v),c=t&&t.items.length>0;return a.createElement(i.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},c&&a.createElement("aside",{className:"col col--3"},a.createElement(f,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},o),n&&a.createElement("div",{className:"col col--2"},a.createElement(g.Z,{toc:n})))))}},1223:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),a=n(6010),l=n(3905),i=n(1242),o=n(33),s=n(4311),c=n(8272),u=n(7413),m=n(9615),d="blogPostTitle_GeHD",p="blogPostData_291c",h="blogPostDetailsFull_3kfx";var f=function(e){var t,n,f,g=(n=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=e.children,y=e.frontMatter,E=e.metadata,b=e.truncated,k=e.isBlogPostPage,Z=void 0!==k&&k,N=E.date,_=E.formattedDate,T=E.permalink,L=E.tags,w=E.readingTime,O=E.title,P=E.editUrl,x=y.author,C=y.image,D=y.keywords,I=y.author_url||y.authorURL,j=y.author_title||y.authorTitle,z=y.author_image_url||y.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(u.Z,{keywords:D,image:C}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(f=Z?"h1":"h2",r.createElement("header",null,r.createElement(f,{className:d},Z?O:r.createElement(o.Z,{to:T},O)),r.createElement("div",{className:(0,a.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:N},_),w&&r.createElement(r.Fragment,null," \xb7 ",g(w))),r.createElement("div",{className:"avatar margin-vert--md"},z&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:I},r.createElement("img",{src:z,alt:x})),r.createElement("div",{className:"avatar__intro"},x&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:I},x)),r.createElement("small",{className:"avatar__subtitle"},j)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},v)),(L.length>0||b)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(t={},t[h]=Z,t))},L.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,n=e.permalink;return r.createElement(o.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),Z&&P&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:P})),!Z&&b&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:E.permalink,"aria-label":"Read more about "+O},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9615:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(1242),l=n(7462),i=n(3366),o=n(6010),s="iconEdit_2_ui",c=["className"],u=function(e){var t=e.className,n=(0,i.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(u,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8608:function(e,t,n){"use strict";n.d(t,{N:function(){return d},Z:function(){return p}});var r=n(3366),a=n(7462),l=n(7294),i=n(6010),o=n(1242),s=n(4311),c="enhancedAnchor_2LWZ",u="h1Heading_27L5",m=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,m),d=(0,s.LU)().navbar.hideOnScroll;return a?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[c]=!d,n)),id:a}),u.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},8272:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(33),i=n(1874),o=n(8608),s=n(6010),c=n(4311),u="details_1VDD";function m(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",u,t.className)}))}var d={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(i.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(l.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(i.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(m,(0,r.Z)({},e,{summary:n}),l)},h1:(0,o.Z)("h1"),h2:(0,o.Z)("h2"),h3:(0,o.Z)("h3"),h4:(0,o.Z)("h4"),h5:(0,o.Z)("h5"),h6:(0,o.Z)("h6")}},3599:function(e,t,n){"use strict";n.d(t,{r:function(){return s},Z:function(){return c}});var r=n(7294),a=n(6010);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],i=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,s=document.getElementsByClassName(e);a<s.length&&!o;){var c=s[a],u=c.href,m=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===m&&(l&&l.classList.remove(t),c.classList.add(t),i(c),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar")},r.createElement(s,{toc:t}))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return h},lG:function(){return i}});var r=n(7410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=n(7294),i={Prism:r.Z,theme:a};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),o(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),o(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=s({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(l.style=i.plain),void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),o(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var i=r?{display:"inline-block"}:{},o=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[i].concat(o))}})),o(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,i=s({},p(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?s({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),o(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,i=0,o=[],s=[o];i>-1;){for(;(l=r[i]++)<a[i];){var d=void 0,p=t[i],h=n[i][l];if("string"==typeof h?(p=i>0?p:["plain"],d=h):(p=m(p,h.type),h.alias&&(p=m(p,h.alias)),d=h.content),"string"==typeof d){var f=d.split(c),g=f.length;o.push({types:p,content:f[0]});for(var v=1;v<g;v++)u(o),s.push(o=[]),o.push({types:p,content:f[v]})}else i++,t.push(p),n.push(d),r.push(0),a.push(d.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return u(o),s}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component)},8206:function(e,t,n){"use strict";function r(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}return n.remove(),l&&(a.removeAllRanges(),a.addRange(l)),r&&r.focus(),i}n.d(t,{Z:function(){return r}})}}]);
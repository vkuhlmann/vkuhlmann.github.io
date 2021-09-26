"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[103],{5246:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3366),r=a(7294),l=a(6010),i=a(9930),s=a(33),o="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(1242);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var v=a(3599),f=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,f),c=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},1223:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),l=a(3905),i=a(1242),s=a(33),o=a(4311),c=a(8272),m=a(7413),d=a(9615),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,v=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=e.children,b=e.frontMatter,E=e.metadata,_=e.truncated,k=e.isBlogPostPage,N=void 0!==k&&k,Z=E.date,y=E.formattedDate,w=E.permalink,x=E.tags,T=E.readingTime,B=E.title,C=E.editUrl,L=b.author,I=b.image,j=b.keywords,P=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,R=b.author_image_url||b.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:j,image:I}),n.createElement("article",{className:N?void 0:"margin-bottom--xl"},(p=N?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},N?B:n.createElement(s.Z,{to:w},B)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:Z},y),T&&n.createElement(n.Fragment,null," \xb7 ",v(T))),n.createElement("div",{className:"avatar margin-vert--md"},R&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:P},n.createElement("img",{src:R,alt:L})),n.createElement("div",{className:"avatar__intro"},L&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:P},L)),n.createElement("small",{className:"avatar__subtitle"},A)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},f)),(x.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[h]=N,t))},x.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),x.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:C})),!N&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:E.permalink,"aria-label":"Read more about "+B},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4859:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(7294),r=a(5246),l=a(1223),i=a(1242),s=a(33);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(4311);var m=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.metadata,m=s.title,d=s.description,u=s.nextItem,g=s.prevItem,h=i.hide_table_of_contents;return n.createElement(r.Z,{title:m,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:a,toc:!h&&t.toc?t.toc:void 0},n.createElement(l.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),(u||g)&&n.createElement(o,{nextItem:u,prevItem:g}))}},9615:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(1242),l=a(7462),i=a(3366),s=a(6010),o="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},3599:function(e,t,a){a.d(t,{r:function(){return o},Z:function(){return c}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],m=c.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),c.classList.add(t),i(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}},1874:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7462),r=a(7294),l=a(6010),i=a(4544),s=a(8206),o=a(7594),c=a.n(o),m=a(448),d=a(1242),u="codeBlockContainer_2gih",g="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",p="codeBlock_6upA",v="copyButton_2e3i",f="codeBlockLines_xlV7",b=a(4311),E=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function k(e){var t=e.children,a=e.className,o=e.metastring,k=e.title,N=(0,b.LU)().prism,Z=(0,r.useState)(!1),y=Z[0],w=Z[1],x=(0,r.useState)(!1),T=x[0],B=x[1];(0,r.useEffect)((function(){B(!0)}),[]);var C=(0,b.bc)(o)||k,L=(0,r.useRef)(null),I=[],j=(0,m.Z)(),P=Array.isArray(t)?t.join(""):t;if(o&&E.test(o)){var A=o.match(E)[1];I=c()(A).filter((function(e){return e>0}))}var R=a&&a.replace(/language-/,"");!R&&N.defaultLanguage&&(R=N.defaultLanguage);var M=P.replace(/\n$/,"");if(0===I.length&&void 0!==R){for(var U,z="",O=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(R),S=P.replace(/\n$/,"").split("\n"),D=0;D<S.length;){var F=D+1,$=S[D].match(O);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":z+=F+",";break;case"highlight-start":U=F;break;case"highlight-end":z+=U+"-"+(F-1)+","}S.splice(D,1)}else D+=1}I=c()(z),M=S.join("\n")}var q=function(){(0,s.Z)(M),w(!0),setTimeout((function(){return w(!1)}),2e3)};return r.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(T),theme:j,code:M,language:R}),(function(e){var t=e.className,a=e.style,i=e.tokens,s=e.getLineProps,o=e.getTokenProps;return r.createElement("div",{className:u},C&&r.createElement("div",{style:a,className:h},C),r.createElement("div",{className:(0,l.Z)(g,R)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,p,"thin-scrollbar"),style:a},r.createElement("code",{className:f},i.map((function(e,t){var a=s({line:e,key:t});I.includes(t+1)&&(a.className+=" docusaurus-highlight-code-line");var l=!0;return e.length>0&&e[e.length-1].content.endsWith("\n")&&(l=!1),r.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},o({token:e,key:t})))})),l&&"\n")})))),r.createElement("button",{ref:L,type:"button","aria-label":(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(v,"clean-btn"),onClick:q},y?r.createElement(d.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(d.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);
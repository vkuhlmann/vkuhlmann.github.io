(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[7733],{21720:function(t,e,n){t.exports=n(35666)},1242:function(t,e,n){"use strict";n.d(e,{Z:function(){return p},I:function(){return u}});var r=n(67294),o=/{\w+}/g,i="{}";function a(t,e){var n=[],a=t.replace(o,(function(t){var o=t.substr(1,t.length-2),a=null==e?void 0:e[o];if(void 0!==a){var c=r.isValidElement(a)?a:String(a);return n.push(c),i}return t}));return 0===n.length?t:n.every((function(t){return"string"==typeof t}))?a.split(i).reduce((function(t,e,r){var o;return t.concat(e).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(t,e,o){return[].concat(t,[r.createElement(r.Fragment,{key:o},e,n[o])])}),[])}function c(t){var e=t.children,n=t.values;if("string"!=typeof e)throw console.warn("Illegal <Interpolate> children",e),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(e,n)}var s=n(57529);function l(t){var e,n=t.id,r=t.message;return null!==(e=s[null!=n?n:r])&&void 0!==e?e:r}function u(t,e){var n,r=t.message;return a(null!==(n=l({message:r,id:t.id}))&&void 0!==n?n:r,e)}function p(t){var e,n=t.children,o=t.id,i=t.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(e=l({message:n,id:o}))&&void 0!==e?e:n;return r.createElement(c,{values:i},a)}},87594:function(t,e){function n(t){let e,n=[];for(let r of t.split(",").map((t=>t.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(e=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[t,r,o,i]=e;if(r&&i){r=parseInt(r),i=parseInt(i);const t=r<i?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(i+=t);for(let e=r;e!==i;e+=t)n.push(e)}}return n}e.default=n,t.exports=n},24544:function(t,e,n){"use strict";n.d(e,{ZP:function(){return h},lG:function(){return a}});var r=n(87410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=n(67294),a={Prism:r.Z,theme:o};function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},p=function(t,e){var n=t.length;return n>0&&t[n-1]===e?t:t.concat(e)},f=function(t,e){var n=t.plain,r=Object.create(null),o=t.styles.reduce((function(t,n){var r=n.languages,o=n.style;return r&&!r.includes(e)||n.types.forEach((function(e){var n=s({},t[e],o);t[e]=n})),t}),r);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function y(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}var h=function(t){function e(){for(var e=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];t.apply(this,n),c(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var n=t.theme?f(t.theme,t.language):void 0;return e.themeDict=n})),c(this,"getLineProps",(function(t){var n=t.key,r=t.className,o=t.style,i=s({},y(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=e.getThemeDict(e.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?s({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),c(this,"getStyleForToken",(function(t){var n=t.types,r=t.empty,o=n.length,i=e.getThemeDict(e.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(t){return i[t]}));return Object.assign.apply(Object,[a].concat(c))}})),c(this,"getTokenProps",(function(t){var n=t.key,r=t.className,o=t.style,i=t.token,a=s({},y(t,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:e.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),c(this,"tokenize",(function(t,e,n,r){var o={code:e,grammar:n,language:r,tokens:[]};t.hooks.run("before-tokenize",o);var i=o.tokens=t.tokenize(o.code,o.grammar,o.language);return t.hooks.run("after-tokenize",o),i}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,n=t.language,r=t.code,o=t.children,i=this.getThemeDict(this.props),a=e.languages[n];return o({tokens:function(t){for(var e=[[]],n=[t],r=[0],o=[t.length],i=0,a=0,c=[],s=[c];a>-1;){for(;(i=r[a]++)<o[a];){var f=void 0,y=e[a],h=n[a][i];if("string"==typeof h?(y=a>0?y:["plain"],f=h):(y=p(y,h.type),h.alias&&(y=p(y,h.alias)),f=h.content),"string"==typeof f){var d=f.split(l),g=d.length;c.push({types:y,content:d[0]});for(var v=1;v<g;v++)u(c),s.push(c=[]),c.push({types:y,content:d[v]})}else a++,e.push(y),n.push(f),r.push(0),o.push(f.length)}a--,e.pop(),n.pop(),r.pop(),o.pop()}return u(c),s}(void 0!==a?this.tokenize(e,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(i.Component)},13618:function(t,e){"use strict";e.Z={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:function(t,e){"use strict";e.Z={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}},35666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(A){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===y)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var p="suspendedStart",f="suspendedYield",y="executing",h="completed",d={};function g(){}function v(){}function m(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(C([])));E&&E!==n&&r.call(E,i)&&(b=E);var x=m.prototype=g.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=m,s(x,"constructor",m),s(m,"constructor",v),v.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},15671:function(t,e,n){"use strict";n.d(e,{Y:function(){return u}});var r=n(67294),o={characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0};function i(t){var e=window.getSelection();e.empty(),e.addRange(t)}function a(t){return(t.metaKey||t.ctrlKey)&&!t.altKey&&"KeyZ"===t.code}function c(t){t=[t.firstChild];for(var e,n="";e=t.pop();)e.nodeType===Node.TEXT_NODE?n+=e.textContent:e.nodeType===Node.ELEMENT_NODE&&"BR"===e.nodeName&&(n+="\n"),e.nextSibling&&t.push(e.nextSibling),e.firstChild&&t.push(e.firstChild);return"\n"!==n[n.length-1]&&(n+="\n"),n}function s(t){var e=window.getSelection().getRangeAt(0),n=e.collapsed?0:e.toString().length,r=document.createRange();return r.setStart(t,0),r.setEnd(e.startContainer,e.startOffset),{position:t=(r=r.toString()).length,extent:n,content:r=(r=r.split("\n"))[e=r.length-1],line:e}}function l(t,e,n){0>=e&&(e=0),(!n||0>n)&&(n=e);var r=document.createRange();t=[t.firstChild];for(var o,i=0,a=e;o=t[t.length-1];){if(o.nodeType===Node.TEXT_NODE){if(i+o.textContent.length>=a){var c=a-i;if(a===e){if(a=r,c<o.textContent.length?a.setStart(o,c):a.setStartAfter(o),n!==e){a=n;continue}break}e=r,c<(n=o).textContent.length?e.setEnd(n,c):e.setEndAfter(n);break}i+=o.textContent.length}else if(o.nodeType===Node.ELEMENT_NODE&&"BR"===o.nodeName){if(i+1>=a){if(a===e){if(c=r,0<o.textContent.length?c.setStart(o,0):c.setStartAfter(o),n!==e){a=n;continue}break}e=r,0<(n=o).textContent.length?e.setEnd(n,0):e.setEndAfter(n);break}i++}t.pop(),o.nextSibling&&t.push(o.nextSibling),o.firstChild&&t.push(o.firstChild)}return r}function u(t,e,n){function u(e){var n=t.current;if(n){var r=s(n);n=c(n),r.position+=e.length-n.length,g.position=r,g.onChange(e,r)}}function p(e,n){var r=t.current;if(r){var o=window.getSelection().getRangeAt(0);o.deleteContents(),o.collapse();var a=n||0;(o=l(r,n=(o=s(r)).position+(0>a?a:0),o.position+(0<a?a:0))).deleteContents(),e&&o.insertNode(document.createTextNode(e)),i(l(r,n+e.length))}}function f(e){var n=t.current;if(n){n.focus();var r=0;if("number"==typeof e)r=e;else{var o=c(n).split("\n").slice(0,e.row);e.row&&(r+=o.join("\n").length+1),r+=e.column}i(l(n,r))}}function y(){var e=t.current;return{text:c(e),position:e=s(e)}}function h(){g.observer.disconnect()}n||(n={});var d=(0,r.useState)([])[1],g=(0,r.useState)((function(){var t={observer:null,disconnected:!1,onChange:e,queue:[],history:[],historyAt:-1,position:null};return"undefined"!=typeof MutationObserver&&(t.observer=new MutationObserver((function(e){var n;(n=t.queue).push.apply(n,e)}))),t}))[0],v=(0,r.useMemo)((function(){return{update:u,insert:p,move:f,getState:y}}),[]);return"object"!=typeof navigator||((0,r.useLayoutEffect)((function(){if(g.onChange=e,t.current&&!n.disabled){if(g.disconnected=!1,g.observer.observe(t.current,o),g.position){var r=g.position,a=r.position;i(l(t.current,a,a+r.extent))}return h}})),(0,r.useLayoutEffect)((function(){if(t.current&&!n.disabled){var e=t.current;if(g.position){e.focus();var r=g.position,o=r.position;i(l(e,o,o+r.extent))}var u=e.style.whiteSpace,p=e.contentEditable,f=!0;try{e.contentEditable="plaintext-only"}catch(L){e.contentEditable="true",f=!1}"pre"!==u&&(e.style.whiteSpace="pre-wrap"),n.indentation&&(e.style.tabSize=e.style.MozTabSize=""+n.indentation),r=""+" ".repeat(n.indentation||0);var y,h=new RegExp("^(?:"+r+")"),m=new RegExp("^(?:"+r+")*("+r+")$"),b=function(n){if(t.current&&g.position){var r=c(e),o=s(e),i=(new Date).valueOf(),a=g.history[g.historyAt];!n&&500>i-y||a&&a[1]===r?y=i:(n=++g.historyAt,g.history[n]=[o,r],g.history.splice(n+1),500<n&&(g.historyAt--,g.history.shift()))}},w=function(){var t;if((t=g.queue).push.apply(t,g.observer.takeRecords()),t=s(e),g.queue.length){g.observer.disconnect(),g.disconnected=!0;var n,r,o=c(e);for(g.position=t;n=g.queue.pop();){for(null!==n.oldValue&&(n.target.textContent=n.oldValue),r=n.removedNodes.length-1;0<=r;r--)n.target.insertBefore(n.removedNodes[r],n.nextSibling);for(r=n.addedNodes.length-1;0<=r;r--)n.addedNodes[r].parentNode&&n.target.removeChild(n.addedNodes[r])}g.onChange(o,t)}},E=function(t){if(!t.defaultPrevented&&t.target===e){if(g.disconnected)return t.preventDefault(),d([]);if(a(t))t.preventDefault(),t.shiftKey?(t=++g.historyAt,(t=g.history[t])||(g.historyAt=g.history.length-1)):(t=--g.historyAt,(t=g.history[t])||(g.historyAt=0)),t&&(g.observer.disconnect(),g.disconnected=!0,g.position=t[0],g.onChange(t[1],t[0]));else{if(b(),"Enter"===t.key){t.preventDefault();var r=s(e),o=/\S/g.exec(r.content);r="\n"+r.content.slice(0,o?o.index:r.content.length),v.insert(r)}else if(f&&!n.indentation||"Backspace"!==t.key){if(n.indentation&&"Tab"===t.key){t.preventDefault(),o=(r=s(e)).position-r.content.length;var i=c(e);r=t.shiftKey?i.slice(0,o)+r.content.replace(h,"")+i.slice(o+r.content.length):i.slice(0,o)+(n.indentation?" ".repeat(n.indentation):"\t")+i.slice(o),v.update(r)}}else t.preventDefault(),window.getSelection().getRangeAt(0).collapsed?(r=s(e),r=m.exec(r.content),v.insert("",r?-r[1].length:-1)):v.insert("",0);t.repeat&&w()}}},x=function(t){t.defaultPrevented||t.isComposing||(a(t)||b(),w(),e.focus())},k=function(t){g.position=window.getSelection().rangeCount&&t.target===e?s(e):null},S=function(t){t.preventDefault(),b(!0),v.insert(t.clipboardData.getData("text/plain")),b(!0),w()};return document.addEventListener("selectstart",k),window.addEventListener("keydown",E),e.addEventListener("paste",S),e.addEventListener("keyup",x),function(){document.removeEventListener("selectstart",k),window.removeEventListener("keydown",E),e.removeEventListener("paste",S),e.removeEventListener("keyup",x),e.style.whiteSpace=u,e.contentEditable=p}}g.history.length=0,g.historyAt=-1}),[t.current,n.disabled,n.indentation])),v}},75058:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},84035:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return o}})},57639:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(58007);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=(0,r.Z)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},58007:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(75058);function o(t,e){if(t){if("string"==typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}},22271:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:function(){return a}});var o=n(79817);function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&(0,o.Z)(t,e)}function a(){a=function(t,e){return new n(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function n(t,r,i){var a=new RegExp(t,r);return e.set(a,i||e.get(t)),(0,o.Z)(a,n.prototype)}function c(t,n){var r=e.get(n);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(e){var n=t.exec.call(this,e);return n&&(n.groups=c(n,this)),n},n.prototype[Symbol.replace]=function(n,o){if("string"==typeof o){var i=e.get(this);return t[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+i[e]})))}if("function"==typeof o){var a=this;return t[Symbol.replace].call(this,n,(function(){var t=arguments;return"object"!==r(t[t.length-1])&&(t=[].slice.call(t)).push(c(t,a)),o.apply(this,t)}))}return t[Symbol.replace].call(this,n,o)},a.apply(this,arguments)}},58206:function(t,e,n){"use strict";function r(t,{target:e=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=t,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),e.append(n),n.select(),n.selectionStart=0,n.selectionEnd=t.length;let a=!1;try{a=document.execCommand("copy")}catch{}return n.remove(),i&&(o.removeAllRanges(),o.addRange(i)),r&&r.focus(),a}n.d(e,{Z:function(){return r}})}}]);
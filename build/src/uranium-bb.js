(function(){function e(a,b){var c;if(typeof a==r){var g=a,t=b.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[b.tagName]||b.tagName:b.firstChild.tagName;c={};var d=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,f,k;k=0;var m;if(d.test(g)){d=d.exec(g);t=d[1];if(d[2]!=="")for(g=d[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);k<g.length;k++)m=g[k].replace(/^\s*|\s*$/g,""),m!==""&&m!==" "&&(m=m.split("="),c[m[0]]=m[1].replace(/(["']?)/g,""));g=d[3]}t=n.createElement(t);for(f in c)k=n.createAttribute(f),
k.nodeValue=c[f],t.setAttributeNode(k);t.innerHTML=g;c=t}else c=a;return c}function l(a){var b=/\S/;a.each(function(a){for(var g=a.firstChild,t=-1,d;g;)d=g.nextSibling,g.nodeType==3&&!b.test(g.nodeValue)?a.removeChild(g):g.nodeIndex=++t,g=d})}function d(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++d.id}function i(a,b){var c=u[a]=u[a]||{};return c[b]=c[b]||[]}function s(a,b,c){var g=d(a),b=i(g,b),g=function(b){c.call(a,b)===!1&&(b.preventDefault(),b.stopPropagation())};g.guid=c.guid=
c.guid||++d.id;g.handler=c;b.push(g);return g}var f,j=this,r=new String("string"),n=j.document,q=/^#?([\w-]+)$/,w=/^#/,D=/<([\w:]+)/,p=function(a){return[].slice.call(a,0)};try{p(n.documentElement.childNodes)}catch(F){p=function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}j.x$=j.xui=f=function(a,b){return new f.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,b){var c=this.length||0,g=0;if(typeof a=="function")for(;g<c;g++)a.call(b,this[g],g,this)};f.fn=f.prototype={extend:function(a){for(var b in a)f.fn[b]=
a[b]},find:function(a,b){var c=[],g;if(a)if(b==void 0&&this.length)c=this.each(function(b){c=c.concat(p(f(a,b)))}).reduce(c);else if(b=b||n,typeof a==r)q.test(a)&&b.getElementById&&b.getElementsByTagName?(c=w.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),c[0]==null&&(c=[])):D.test(a)?(g=n.createElement("i"),g.innerHTML=a,p(g.childNodes).forEach(function(a){c.push(a)})):c=j.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),c=p(c);else if(a instanceof Array)c=a;else if(a.toString()==
"[object NodeList]")c=p(a);else{if(a.nodeName||a===j)c=[a]}else return this;return this.set(c)},set:function(a){var b=f();b.cache=p(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[],a=a||p(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(a){var b=f(a);return this.filter(function(){var a=this,g=null;b.each(function(b){g=g||b==a});return g})},filter:function(a){var b=[];return this.each(function(c,g){a.call(c,g)&&b.push(c)}).set(b)},
not:function(a){var b=p(this);return this.filter(function(c){var g;f(a).each(function(a){return g=b[c]!=a});return g})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};f.fn.find.prototype=f.fn;f.extend=f.fn.extend;f.extend({html:function(a,b){l(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var c=n.createElement("p");b.each(function(a){c.appendChild(a)});
this.each(function(a){a.innerHTML=c.innerHTML})}else{var g=this;b.each(function(b){g.html(a,b)})}return this}return this.each(function(c){var g,d=0;if(a=="inner")if(typeof b==r||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(g=c.length;d<g;d++)eval(c[d].text)}else c.innerHTML="",c.appendChild(b);else a=="outer"?c.parentNode.replaceChild(e(b,c),c):a=="top"?c.insertBefore(e(b,c),c.firstChild):a=="bottom"?c.insertBefore(e(b,c),null):a=="remove"?c.parentNode.removeChild(c):a==
"before"?c.parentNode.insertBefore(e(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(e(b,c.parentNode),c.nextSibling)})},attr:function(a,b){if(arguments.length==2)return this.each(function(c){a=="checked"&&(b==""||b==!1||typeof b=="undefined")?c.removeAttribute(a):c.setAttribute(a,b)});else{var c=[];this.each(function(b){b=b.getAttribute(a);b!=null&&c.push(b)});return c}}});"inner outer top bottom remove before after".split(" ").forEach(function(a){f.fn[a]=function(a){return function(c){return this.html(a,
c)}}(a)});f.events={};var u={};f.extend({on:function(a,b,c){return this.each(function(g){if(f.events[a]){var t=d(g),t=i(t,a);c=c||{};c.handler=function(b,c){f.fn.fire.call(f(this),a,c)};t.length||f.events[a].call(g,c)}g.addEventListener(a,s(g,a,b),!1)})},un:function(a,b){return this.each(function(c){for(var g=d(c),f=i(g,a),e=f.length;e--;)if(b===void 0||b.guid===f[e].guid){c.removeEventListener(a,f[e],!1);var j=u[g][a],k=e,m=j.slice(2);j.length=k<0?j.length+k:k;j.push.apply(j,m)}u[g][a].length===
0&&delete u[g][a];for(var n in u[g])return;delete u[g]})},fire:function(a,b){return this.each(function(c){if(c==n&&!c.dispatchEvent)c=n.documentElement;var g=n.createEvent("HTMLEvents");g.initEvent(a,!0,!0);g.data=b||{};g.eventName=a;c.dispatchEvent(g)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(a){f.fn[a]=function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(a)});f(j).on("load",
function(){"onorientationchange"in n.body||function(a,b){f(j).on("resize",function(){var c=j.innerWidth<a&&j.innerHeight>b&&j.innerWidth<j.innerHeight,g=j.innerWidth>a&&j.innerHeight<b&&j.innerWidth>j.innerHeight;if(c||g)j.orientation=c?0:90,f("body").fire("orientationchange"),a=j.innerWidth,b=j.innerHeight})}(j.innerWidth,j.innerHeight)});var x;try{x=!!n.createEvent("TouchEvent").initTouchEvent}catch(G){x=!1}f.touch=x;d.id=1;f.extend({tween:function(a,b){a instanceof Array&&a.forEach(function(){});
var c=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),g=function(a){var b=[],c;if(typeof a!=r){for(c in a)b.push(c+":"+a[c]);b=b.join(";")}else b=a;return b}(a);return this.each(function(a){emile(a,g,c,b)})}});var z=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;f.extend({setStyle:function(a,b){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(c){c.style[a]=b})},getStyle:function(a,b){var c=function(a,b){return n.defaultView.getComputedStyle(a,
"").getPropertyValue(b.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(b===void 0){var g=[];this.each(function(b){g.push(c(b,a))});return g}else this.each(function(g){b(c(g,a))})},addClass:function(a){return this.each(function(b){if(y(a).test(b.className)===!1)b.className=(b.className+" "+a||"").replace(z,"")})},hasClass:function(a,b){var c=this;return this.length&&function(){var g=!1;c.each(function(c){y(a).test(c.className)&&(g=!0,b&&b(c))});return g}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var b=y(a);this.each(function(a){var g;g=(a.className.replace(b,"$1")||"").replace(z,"");a.className=g})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var A={},y=function(a){var b=A[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),A[a]=b);return b};f.extend({xhr:function(a,b,c){function g(){e.readyState==4&&(delete f.xmlHttpRequest,(e.status===0||e.status==200)&&e.handleResp(),/^[45]/.test(e.status)&&e.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(c=b,b=a,a="inner");var d=c?c:{};if(typeof c=="function")d={},d.callback=c;var f=this,e=new XMLHttpRequest,c=d.method||"get",k=d.async||!1,m=d.data||null,i=0;e.queryString=m;e.open(c,b,k);if(d.headers)for(;i<d.headers.length;i++)e.setRequestHeader(d.headers[i].name,d.headers[i].value);e.handleResp=d.callback!=null?d.callback:function(){f.html(a,this.responseText)};e.handleError=d.error&&typeof d.error=="function"?d.error:function(){};if(k)e.onreadystatechange=
g,this.xmlHttpRequest=e;e.send(m);k||g();return this}});(function(a,b){function c(a,b,c){return(a+(b-a)*c).toFixed(3)}function d(a,b,c){for(var g=2,e,f,i=[],k=[];e=3,f=arguments[g-1],g--;)if(f.substr(0,1)=="r")for(f=f.match(/\d+/g);e--;)i.push(~~f[e]);else for(f.length==4&&(f="#"+f.substr(1,1)+f.substr(1,1)+f.substr(2,1)+f.substr(2,1)+f.substr(3,1)+f.substr(3,1));e--;)i.push(parseInt(f.substr(1+e*2,2),16));for(;e--;)g=~~(i[e+3]+(i[e]-i[e+3])*c),k.push(g<0?0:g>255?255:g);return"rgb("+k.join(",")+")"}
function e(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,f:d,u:""}:{v:b,f:c,u:a}}function f(a){var b={},c=k.length,d;i.innerHTML='<div style="'+a+'"></div>';for(a=i.childNodes[0].style;c--;)if(d=a[k[c]])b[k[c]]=e(d);return b}var i=n.createElement("div"),k="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,c,d){var a=typeof a=="string"?n.getElementById(a):a,c=c||{},g=f(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),i,k={},j=+new Date,h=c.duration||200,B=j+h,C,E=c.easing||function(h){return-Math.cos(h*Math.PI)/2+0.5};for(i in g)k[i]=e(b[i]);C=setInterval(function(){var b=+new Date,o=b>B?1:(b-j)/h;for(i in g)a.style[i]=g[i].f(k[i].v,g[i].v,E(o))+g[i].u;b>B&&(clearInterval(C),c.after&&c.after(),d&&setTimeout(d,1))},10)}})("emile",this);(function(){function a(h,a,b,c,d,o){for(var d=
0,f=c.length;d<f;d++){var g=c[d];if(g){for(var g=g[h],e=!1;g;){if(g.sizcache===b){e=c[g.sizset];break}if(g.nodeType===1&&!o)g.sizcache=b,g.sizset=d;if(g.nodeName.toLowerCase()===a){e=g;break}g=g[h]}c[d]=e}}}function b(h,a,b,c,d,g){for(var d=0,f=c.length;d<f;d++){var e=c[d];if(e){for(var e=e[h],i=!1;e;){if(e.sizcache===b){i=c[e.sizset];break}if(e.nodeType===1){if(!g)e.sizcache=b,e.sizset=d;if(typeof a!=="string"){if(e===a){i=!0;break}}else if(k.filter(a,[e]).length>0){i=e;break}}e=e[h]}c[d]=i}}}var c=
/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,f=!1,i=!0;[0,0].sort(function(){i=!1;return 0});var k=function(h,a,b,d){var b=b||[],g=a=a||n;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!h||typeof h!=="string")return b;var o=[],f,i,j,s,p=!0,q=k.isXML(a),u=h,v;do if(c.exec(""),f=c.exec(u))if(u=f[3],o.push(f[1]),f[2]){s=f[3];break}while(f);if(o.length>1&&l.exec(h))if(o.length===2&&
m.relative[o[0]])i=w(o[0]+o[1],a);else for(i=m.relative[o[0]]?[a]:k(o.shift(),a);o.length;)h=o.shift(),m.relative[h]&&(h+=o.shift()),i=w(h,i);else if(!d&&o.length>1&&a.nodeType===9&&!q&&m.match.ID.test(o[0])&&!m.match.ID.test(o[o.length-1])&&(f=k.find(o.shift(),a,q),a=f.expr?k.filter(f.expr,f.set)[0]:f.set[0]),a){f=d?{expr:o.pop(),set:r(d)}:k.find(o.pop(),o.length===1&&(o[0]==="~"||o[0]==="+")&&a.parentNode?a.parentNode:a,q);i=f.expr?k.filter(f.expr,f.set):f.set;for(o.length>0?j=r(i):p=!1;o.length;)f=
v=o.pop(),m.relative[v]?f=o.pop():v="",f==null&&(f=a),m.relative[v](j,f,q)}else j=[];j||(j=i);j||k.error(v||h);if(e.call(j)==="[object Array]")if(p)if(a&&a.nodeType===1)for(h=0;j[h]!=null;h++)j[h]&&(j[h]===!0||j[h].nodeType===1&&k.contains(a,j[h]))&&b.push(i[h]);else for(h=0;j[h]!=null;h++)j[h]&&j[h].nodeType===1&&b.push(i[h]);else b.push.apply(b,j);else r(j,b);s&&(k(s,g,b,d),k.uniqueSort(b));return b};k.uniqueSort=function(h){if(q&&(f=i,h.sort(q),f))for(var a=1;a<h.length;a++)h[a]===h[a-1]&&h.splice(a--,
1);return h};k.matches=function(h,a){return k(h,null,null,a)};k.find=function(h,a,b){var c;if(!h)return[];for(var d=0,f=m.order.length;d<f;d++){var g=m.order[d],e;if(e=m.leftMatch[g].exec(h)){var i=e[1];e.splice(1,1);if(i.substr(i.length-1)!=="\\"&&(e[1]=(e[1]||"").replace(/\\/g,""),c=m.find[g](e,a,b),c!=null)){h=h.replace(m.match[g],"");break}}}c||(c=a.getElementsByTagName("*"));return{set:c,expr:h}};k.filter=function(h,a,b,c){for(var d=h,f=[],e=a,g,i,j=a&&a[0]&&k.isXML(a[0]);h&&a.length;){for(var l in m.filter)if((g=
m.leftMatch[l].exec(h))!=null&&g[2]){var n=m.filter[l],s,p;p=g[1];i=!1;g.splice(1,1);if(p.substr(p.length-1)!=="\\"){e===f&&(f=[]);if(m.preFilter[l])if(g=m.preFilter[l](g,e,b,f,c,j)){if(g===!0)continue}else i=s=!0;if(g)for(var q=0;(p=e[q])!=null;q++)if(p){s=n(p,g,q,e);var r=c^!!s;b&&s!=null?r?i=!0:e[q]=!1:r&&(f.push(p),i=!0)}if(s!==void 0){b||(e=f);h=h.replace(m.match[l],"");if(!i)return[];break}}}if(h===d)if(i==null)k.error(h);else break;d=h}return e};k.error=function(h){throw"Syntax error, unrecognized expression: "+
h;};var m=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(h){return h.getAttribute("href")}},relative:{"+":function(h,a){var b=typeof a==="string",c=b&&!/\W/.test(a),b=b&&!c;c&&(a=a.toLowerCase());for(var c=0,d=h.length,f;c<d;c++)if(f=h[c]){for(;(f=f.previousSibling)&&f.nodeType!==1;);h[c]=b||f&&f.nodeName.toLowerCase()===a?f||!1:f===a}b&&k.filter(a,h,!0)},">":function(h,a){var b=typeof a==="string",c,d=0,f=h.length;if(b&&!/\W/.test(a))for(a=a.toLowerCase();d<f;d++){if(c=
h[d])b=c.parentNode,h[d]=b.nodeName.toLowerCase()===a?b:!1}else{for(;d<f;d++)(c=h[d])&&(h[d]=b?c.parentNode:c.parentNode===a);b&&k.filter(a,h,!0)}},"":function(h,c,f){var e=d++,i=b,o;typeof c==="string"&&!/\W/.test(c)&&(o=c=c.toLowerCase(),i=a);i("parentNode",c,e,h,o,f)},"~":function(h,c,f){var e=d++,i=b,o;typeof c==="string"&&!/\W/.test(c)&&(o=c=c.toLowerCase(),i=a);i("previousSibling",c,e,h,o,f)}},find:{ID:function(h,a,b){if(typeof a.getElementById!=="undefined"&&!b)return(h=a.getElementById(h[1]))?
[h]:[]},NAME:function(h,a){if(typeof a.getElementsByName!=="undefined"){for(var b=[],c=a.getElementsByName(h[1]),d=0,f=c.length;d<f;d++)c[d].getAttribute("name")===h[1]&&b.push(c[d]);return b.length===0?null:b}},TAG:function(h,a){return a.getElementsByTagName(h[1])}},preFilter:{CLASS:function(h,a,b,c,d,f){h=" "+h[1].replace(/\\/g,"")+" ";if(f)return h;for(var f=0,e;(e=a[f])!=null;f++)e&&(d^(e.className&&(" "+e.className+" ").replace(/[\t\n]/g," ").indexOf(h)>=0)?b||c.push(e):b&&(a[f]=!1));return!1},
ID:function(h){return h[1].replace(/\\/g,"")},TAG:function(h){return h[1].toLowerCase()},CHILD:function(h){if(h[1]==="nth"){var a=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(h[2]==="even"&&"2n"||h[2]==="odd"&&"2n+1"||!/\D/.test(h[2])&&"0n+"+h[2]||h[2]);h[2]=a[1]+(a[2]||1)-0;h[3]=a[3]-0}h[0]=d++;return h},ATTR:function(h,a,b,c,d,f){a=h[1].replace(/\\/g,"");!f&&m.attrMap[a]&&(h[1]=m.attrMap[a]);h[2]==="~="&&(h[4]=" "+h[4]+" ");return h},PSEUDO:function(a,b,d,f,e){if(a[1]==="not")if((c.exec(a[3])||"").length>1||
/^\w/.test(a[3]))a[3]=k(a[3],null,null,b);else return a=k.filter(a[3],b,d,1^e),d||f.push.apply(f,a),!1;else if(m.match.POS.test(a[0])||m.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()===
"button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var f=b[1],e=m.filters[f];if(e)return e(a,c,b,d);else if(f==="contains")return(a.textContent||
a.innerText||k.getText([a])||"").indexOf(b[3])>=0;else if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else k.error("Syntax error, unrecognized expression: "+f)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":var c=b[2],f=b[3];if(c===1&&f===0)return!0;var e=b[0],g=a.parentNode;if(g&&(g.sizcache!==
e||!a.nodeIndex)){for(var i=0,d=g.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++i;g.sizcache=e}d=a.nodeIndex-f;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=m.attrHandle[c]?m.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=
c+"",f=b[2],e=b[4];return c==null?f==="!=":f==="="?d===e:f==="*="?d.indexOf(e)>=0:f==="~="?(" "+d+" ").indexOf(e)>=0:!e?d&&c!==!1:f==="!="?d!==e:f==="^="?d.indexOf(e)===0:f==="$="?d.substr(d.length-e.length)===e:f==="|="?d===e||d.substr(0,e.length+1)===e+"-":!1},POS:function(a,b,c,d){var f=m.setFilters[b[2]];if(f)return f(a,c,b,d)}}},l=m.match.POS,s=function(a,b){return"\\"+(b-0+1)},p;for(p in m.match)m.match[p]=RegExp(m.match[p].source+/(?![^\[]*\])(?![^\(]*\))/.source),m.leftMatch[p]=RegExp(/(^(?:.|\r|\n)*?)/.source+
m.match[p].source.replace(/\\(\d+)/g,s));var r=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(n.documentElement.childNodes,0)}catch(u){r=function(a,b){var c=b||[],d=0;if(e.call(a)==="[object Array]")Array.prototype.push.apply(c,a);else if(typeof a.length==="number")for(var f=a.length;d<f;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var q;n.documentElement.compareDocumentPosition?q=function(a,b){if(!a.compareDocumentPosition||
!b.compareDocumentPosition)return a==b&&(f=!0),a.compareDocumentPosition?-1:1;var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;c===0&&(f=!0);return c}:"sourceIndex"in n.documentElement?q=function(a,b){if(!a.sourceIndex||!b.sourceIndex)return a==b&&(f=!0),a.sourceIndex?-1:1;var c=a.sourceIndex-b.sourceIndex;c===0&&(f=!0);return c}:n.createRange&&(q=function(a,b){if(!a.ownerDocument||!b.ownerDocument)return a==b&&(f=!0),a.ownerDocument?-1:1;var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();
c.setStart(a,0);c.setEnd(a,0);d.setStart(b,0);d.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,d);c===0&&(f=!0);return c});k.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b};(function(){var a=n.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=n.documentElement;c.insertBefore(a,c.firstChild);if(n.getElementById(b))m.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},m.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=n.createElement("div");a.appendChild(n.createComment(""));if(a.getElementsByTagName("*").length>0)m.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){for(var d=[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")m.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();n.querySelectorAll&&function(){var a=k,b=n.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){k=function(b,c,d,f){c=c||n;if(!f&&c.nodeType===
9&&!k.isXML(c))try{return r(c.querySelectorAll(b),d)}catch(e){}return a(b,c,d,f)};for(var c in a)k[c]=a[c];b=null}}();(function(){var a=n.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))m.order.splice(1,0,"CLASS"),m.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},
a=null})();k.contains=n.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):!0)};k.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var w=function(a,b){for(var c=[],d="",f,e=b.nodeType?[b]:b;f=m.match.PSEUDO.exec(a);)d+=f[0],a=a.replace(m.match.PSEUDO,"");a=m.relative[a]?a+"*":a;f=0;for(var g=e.length;f<g;f++)k(a,e[f],c);return k.filter(d,c)};j.Sizzle=k})()})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(e){Ur.initialize({type:"DOMContentLoaded"},e);Ur.loaded?Ur.initialize({type:"load"},e):window.addEventListener("load",function(l){Ur.initialize(l,e)},!1)},initialize:function(e,l){var d=e.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(l===void 0)l=document.body;for(name in d)(new d[name]).initialize(l);if(e.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(e){e()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(e,l){if(e!==void 0){var d=e.length||0,i=0;if(typeof l=="function")for(;i<d;i++)l.call(l,e[i],i,e)}},offset:function(e){typeof(e=="undefined")&&(e=this[0]);for(cumulative_left=cumulative_top=0;e.offsetParent;)cumulative_top+=e.offsetTop,cumulative_left+=e.offsetLeft,e=e.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(e,l){return e.parentNode!=window.document?x$().find_set_ancestor(e.parentNode,l):null},find_set_ancestor:function(e,
l){var d=x$(e).attr("data-ur-set")[0];return d!==void 0?l==void 0?e:d==l?e:x$().find_next_ancestor(e,l):x$().find_next_ancestor(e,l)},get_unique_uranium_id:function(){var e=0;return function(){e+=1;return e}}(),find_elements:function(e,l){var d={};this.each(function(d,e,f){return function(){x$().helper_find(this,d,e,f)}}(e,l,d));return d},helper_find:function(e,l,d,i){x$(e).find("*[data-ur-"+l+"-component]").each(function(){var e=!0,f=x$(this).attr("data-ur-id");if(f.length!=0)i[f]===void 0&&(i[f]=
{});else{var j=x$().find_set_ancestor(this);if(x$(j).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;j!==null?(f=x$(j).attr("data-ur-id")[0],f===void 0&&(f=x$().get_unique_uranium_id(),x$(j).attr("data-ur-id",f)),i[f]===void 0&&(i[f]={}),i[f].set=j):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),e=!1)}j=x$(this).attr("data-ur-"+l+"-component");j===void 0&&(e=!1);if(e)if(d!==void 0&&d[j]!==void 0)d[j](i[f],this,j);else i[f][j]=this});return i}};xui.extend(mixins);Ur.QuickLoaders.toggler=function(){function e(d,e){d.content===void 0&&(d.content=[]);d.content.push(e)}function l(){this.component_constructors={content:e}}l.prototype.find=function(d){d=x$(d).find_elements("toggler",this.component_constructors);for(toggler_id in d){var e=d[toggler_id];if(e.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+toggler_id);else{var l=x$(e.button).attr("data-ur-state")[0];l===void 0&&x$(e.button).attr("data-ur-state","disabled");
e.content===void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+toggler_id):x$().iterate(e.content,function(d){x$(d).attr("data-ur-state")[0]===void 0&&x$(d).attr("data-ur-state",l)})}}return d};l.prototype.construct_button_callback=function(d){return function(e){var e=e.currentTarget,l=x$(e).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(e).attr("data-ur-state",l);x$().iterate(d,function(d){var e=x$(d).attr("data-ur-state")[0]==="enabled"?"disabled":
"enabled";x$(d).attr("data-ur-state",e)})}};l.prototype.initialize=function(d){d=this.find(d);for(name in d){var e=d[name];x$(e.button).click(this.construct_button_callback(e.content));x$(e.set).attr("data-ur-state","enabled")}};return l}();Ur.QuickLoaders["select-list"]=function(){function e(d,e){this.select=d;this.list=e;this.initialize()}function l(){this.SelectLists={}}e.prototype.initialize=function(){x$(this.list).click(function(d){return function(e){d.trigger_option(e)}}(this))};e.prototype.trigger_option=function(d){var e=d.target,l="";x$().iterate(this.list.children,function(d){d==e?(x$(d).attr("data-ur-state","enabled"),l=x$(d).attr("value")):x$(d).attr("data-ur-state","disabled")});this.select.value=l;return!0};l.prototype.initialize=
function(d){d=x$(d).find_elements("select-list");for(name in d){var i=d[name];this.SelectLists[name]=new e(d[name].select,d[name].content);x$(i.set).attr("data-ur-state","enabled")}};return l}();Ur.QuickLoaders["select-buttons"]=function(){function e(d){this.select=d.select;this.increment=d.increment;this.decrement=d.decrement;this.initialize()}function l(){}e.prototype.initialize=function(){x$(this.increment).click(function(d){return function(e){d.trigger_option(e,1)}}(this));x$(this.decrement).click(function(d){return function(e){d.trigger_option(e,-1)}}(this))};e.prototype.trigger_option=function(d,e){if(x$(d.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var l={},f=this.select.value,
j={prev:null,next:null};x$().iterate(this.select.children,function(d,e){x$(d).attr("value")[0]==f&&(l={element:d,index:e});typeof l.index=="undefined"&&(j.prev=x$(d).attr("value")[0]);e==l.index+1&&(j.next=x$(d).attr("value")[0])});var r=this.select.children.length,n=l.index+e;n==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");n==r-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(n<
0||n==r)return!1;this.select.value=j[e==1?"next":"prev"];return!0};l.prototype.initialize=function(d){d=x$(d).find_elements("select-buttons");for(name in d)new e(d[name]),x$(d[name].set).attr("data-ur-state","enabled")};return l}();

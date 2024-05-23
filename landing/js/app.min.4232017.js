/* PLUGINS */
// graph-tabs
class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabList.setAttribute('role', 'tablist');

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__nav-btn--active');
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel--active');
    });

    this.tabsBtns[0].classList.add('tabs__nav-btn--active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel--active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabList.querySelector('[aria-selected]');

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
    this.tabsPanels[index].classList.add('tabs__panel--active');

    this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
    this.tabsBtns[index].classList.add('tabs__nav-btn--active');

    this.options.isChanged(this);
  }
};
// lazysizes
/*! lazysizes - v5.3.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
/*! lazysizes - v5.3.2 */

!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,z,c){"use strict";var g,y,b,f,r,l,s,v,m;e.addEventListener&&(g=c.cfg,y=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,r=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,l=/\(|\)|'/,s={contain:1,cover:1},v=function(e,t){var a;t&&((a=t.match(r))&&a[1]?e.setAttribute("type",a[1]):e.setAttribute("media",g.customMedia[t]||t))},m=function(e){var t,a,r,i,s;e.target._lazybgset&&(a=(t=e.target)._lazybgset,(r=t.currentSrc||t.src)&&(i=l.test(r)?JSON.stringify(r):r,(s=c.fire(a,"bgsetproxy",{src:r,useSrc:i,fullSrc:null})).defaultPrevented||(a.style.backgroundImage=s.detail.fullSrc||"url("+s.detail.useSrc+")")),t._lazybgsetLoading&&(c.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading))},addEventListener("lazybeforeunveil",function(e){var t,a,r,i,s,l,n,d,u,o;!e.defaultPrevented&&(t=e.target.getAttribute("data-bgset"))&&(u=e.target,(o=z.createElement("img")).alt="",o._lazybgsetLoading=!0,e.detail.firesLoad=!0,a=t,r=u,i=o,s=z.createElement("picture"),l=r.getAttribute(g.sizesAttr),n=r.getAttribute("data-ratio"),d=r.getAttribute("data-optimumx"),r._lazybgset&&r._lazybgset.parentNode==r&&r.removeChild(r._lazybgset),Object.defineProperty(i,"_lazybgset",{value:r,writable:!0}),Object.defineProperty(r,"_lazybgset",{value:s,writable:!0}),a=a.replace(y," ").split(b),s.style.display="none",i.className=g.lazyClass,1!=a.length||l||(l="auto"),a.forEach(function(e){var t,a=z.createElement("source");l&&"auto"!=l&&a.setAttribute("sizes",l),(t=e.match(f))?(a.setAttribute(g.srcsetAttr,t[1]),v(a,t[2]),v(a,t[3])):a.setAttribute(g.srcsetAttr,e),s.appendChild(a)}),l&&(i.setAttribute(g.sizesAttr,l),r.removeAttribute(g.sizesAttr),r.removeAttribute("sizes")),d&&i.setAttribute("data-optimumx",d),n&&i.setAttribute("data-ratio",n),s.appendChild(i),r.appendChild(s),setTimeout(function(){c.loader.unveil(o),c.rAF(function(){c.fire(o,"_lazyloaded",{},!0,!0),o.complete&&m({target:o})})}))}),z.addEventListener("load",m,!0),e.addEventListener("lazybeforesizes",function(e){var t,a,r,i;e.detail.instance==c&&e.target._lazybgset&&e.detail.dataAttr&&(t=e.target._lazybgset,r=t,i=(getComputedStyle(r)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!s[i]&&s[r.style.backgroundSize]&&(i=r.style.backgroundSize),s[a=i]&&(e.target._lazysizesParentFit=a,c.rAF(function(){e.target.setAttribute("data-parent-fit",a),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit})))},!0),z.documentElement.addEventListener("lazybeforesizes",function(e){var t,a;!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==c&&(e.detail.width=(t=e.target._lazybgset,a=c.gW(t,t.parentNode),(!t._lazysizesWidth||a>t._lazysizesWidth)&&(t._lazysizesWidth=a),t._lazysizesWidth))}))});;
// wowjs
/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var t, e, n, i, o, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o;
            for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
                if (o[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, r;
            for (n = i = 0, o = (r = this.keys).length; o > i; n = ++i)
                if (r[n] === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, (function(t, e) {
                return e.toUpperCase()
            })), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 150,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (o = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, n, i, o;
                    for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (n = 0, i = (o = this.boxes).length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, r, s;
                    for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() {
                        var t, e, n, i;
                        for (i = [], t = 0, e = (n = r.addedNodes || []).length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function() {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (r = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
            return window.requestAnimationFrame(t)
        } : function(t) {
            return t()
        }, o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, r;
            for (n in i = [], e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, s, l;
                for (l = [], e = 0, i = (s = this.vendors).length; i > e; e++) r = s[e], l.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return l
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, r, s, l, a;
            for (s = (l = i(t)).getPropertyCSSValue(e), n = 0, o = (r = this.vendors).length; o > n; n++) a = r[n], s = s || l.getPropertyCSSValue("-" + a + "-" + e);
            return s
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, o = (r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}).call(this);;
/* ---------------------- WOW JS ---------------------------- */
wow = new WOW();
wow.init();
// accordion
// accordion
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(el => {
    el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');

        self.classList.toggle('open');

        // если открыт аккордеон
        if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
        }
    });
});;
// lazymap
function lazyScroll() {
    loadMapBlock.classList.contains("_loaded") || getMap()
}
window.addEventListener("scroll", lazyScroll);
const windowHeight = document.documentElement.clientHeight,
    loadMapBlock = document.querySelector(".lazy-iframe");

function getMap() {
    const e = loadMapBlock.getBoundingClientRect().top + window.pageYOffset;
    if (window.pageYOffset > e - windowHeight) {
        const e = loadMapBlock.dataset.map;
        loadMapBlock.insertAdjacentHTML("beforeend", `<iframe src="${e}" style="border: 0" allowfullscreen=""></iframe>`), loadMapBlock.classList.add("_loaded")
    }
}
loadMapBlock.classList.contains("_loaded") || getMap();;
/* smooth scroll */
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
animationTime = 300,
framesCount = 20;
anchors.forEach(function(item) {
// каждому якорю присваиваем обработчик события
item.addEventListener('click', function(e) {
// убираем стандартное поведение
e.preventDefault();
// для каждого якоря берем соответствующий ему элемент и определяем его координату Y
let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
// запускаем интервал, в котором
let scroller = setInterval(function() {
// считаем на сколько скроллить за 1 такт
let scrollBy = coordY / framesCount;
// если к-во пикселей для скролла за 1 такт больше расстояния до элемента
// и дно страницы не достигнуто
if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
    // то скроллим на к-во пикселей, которое соответствует одному такту
    window.scrollBy(0, scrollBy);
    } else {
    // иначе добираемся до элемента и выходим из интервала
    window.scrollTo(0, coordY);
    clearInterval(scroller);
    }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
    });
});



/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	/* ---------------------- MENU ---------------------------- */
let burgerIcon = document.querySelector('.header__toggle-burger');
let closeIcon = document.querySelector('.header__toggle-close');
let menu = document.querySelector('.header__panel');
let scrollObject = document.querySelector('.header__panel');
burgerIcon.addEventListener('click', function(){
    closeIcon.classList.remove('hidden');
    burgerIcon.classList.add('hidden');
    menu.classList.add('header__panel--open');
    // scrollLock.disablePageScroll(scrollObject);
})
closeIcon.addEventListener('click', function(){
    closeIcon.classList.add('hidden');
    burgerIcon.classList.remove('hidden');
    menu.classList.remove('header__panel--open');
    // scrollLock.enablePageScroll(scrollObject);
})
// dropdown
let dropdowns = document.querySelectorAll('.nav__dropdown');
dropdowns.forEach(dropdown => {
    document.addEventListener('click', (e) => {
        if(!e.composedPath().includes(dropdown)){
            dropdown.classList.remove('nav__dropdown--open');
        }
    });
    dropdown.addEventListener('click', function(){
        dropdown.classList.toggle('nav__dropdown--open');
    });
});
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    function getCookie(name) {
    let cookie_arr = document.cookie.split('; ');
    let cookie_obj = {};

    for (let i=0; i<cookie_arr.length; i++) {
        let nv = cookie_arr[i].split('=');
        cookie_obj[nv[0]] = nv[1]; 
    }

    return cookie_obj[name];
}        

let overlay_div = document.getElementById('tg-alert');

if ( getCookie('hide_popup') == 'yes' ) {
    overlay_div.style.display='none';
}

// При нажатии на кнопку ставим cookie, которая будет запрещать показ
// модального окна
document.getElementById('hide_popup')
.addEventListener('click', function() { 
    // Ставим cookie на минуту.                
    var date = new Date(new Date().getTime() + 60 * 1000 * 43200);
    document.cookie = "hide_popup=yes; path=/; expires=" + date.toUTCString();

    // и сразу же скрываем окно
    overlay_div.style.display='none';
});;
    /* ---------------------- SERVICES TABS ---------------------------- */
    let serviceTabsSelectHeader = document.querySelector('.service__tabs-select-header');
let serviceTabsSelectBody = document.querySelector('.service__tabs-select-body');
let serviceTabsSelectDesc = document.querySelector('.service__tabs-select-desc');
let thisTabClicked;


serviceTabsSelectHeader.addEventListener('click', function(){
  serviceTabsSelectBody.classList.toggle('service__tabs-select-body_active');
  serviceTabsSelectHeader.classList.toggle('service__tabs-select-header_active');
});


const tabsService = new GraphTabs('service-tab', {
    isChanged: (tabs) => {
      clickedTabContent = document.querySelector('.service .tabs__nav-btn--active').innerHTML;
      clickedTabDescription = document.querySelector('.service .tabs__panel--active .service__tabs-item-title').innerHTML;
      serviceTabsSelectHeader.innerHTML = clickedTabContent;
      serviceTabsSelectDesc.innerHTML = clickedTabDescription;

      serviceTabsSelectBody.classList.remove('service__tabs-select-body_active');
      serviceTabsSelectHeader.classList.remove('service__tabs-select-header_active');

      if (document.documentElement.clientWidth < 768) {
        document.querySelector('.service').scrollIntoView();
      }
    }
});




if (document.documentElement.clientWidth < 768) {
  const sAccordions = document.querySelectorAll('.service__item');
  sAccordions.forEach(el => {
      el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.service__item-top');
          const content = self.querySelector('.service__item-content');
  
          self.classList.toggle('service__item_open');
  
          // если открыт аккордеон
          if (self.classList.contains('service__item_open')) {
              control.setAttribute('aria-expanded', true);
              content.setAttribute('aria-hidden', false);
              content.style.maxHeight = content.scrollHeight + 'px';
          } else {
              control.setAttribute('aria-expanded', false);
              content.setAttribute('aria-hidden', true);
              content.style.maxHeight = null;
          }
      });
  });


  var timeout_id = setTimeout(function(){
    let serviceTabsSelect = document.querySelector('.service__tabs-select');
    serviceTabsSelect.classList.remove('service__tabs-select_start');
    let serviceSection = document.querySelector('.service');
    let serviceSectionOffset = serviceSection.offsetTop;
    let serviceBox = document.querySelectorAll('.service__box');
    let posTop;
  
    document.addEventListener('scroll', function(){
      posTop = window.pageYOffset;
      if(posTop >= (serviceSectionOffset)){
        serviceTabsSelect.classList.add('service__tabs-select_fixed');
        for(let i = 0; serviceBox.length > i; i++){
          serviceBox[i].classList.add('service__box_open');
        }
      }
      else if(posTop <= (serviceSectionOffset)) {
        serviceTabsSelect.classList.remove('service__tabs-select_fixed');
        for(let i = 0; serviceBox.length > i; i++){
          serviceBox[i].classList.remove('service__box_open');
        }
      }
    });
  }, 2000);

};
	/* ROLL NETWORK */
    // roll-network
let icoRollNetwork = document.querySelector('.ico-roll-network');
let blockRoll = document.querySelector('.block-roll');
let messageList = document.querySelector('.message-list');
let chatChatIcon = document.querySelector('.chat-chat-icon');

icoRollNetwork.addEventListener('click', function () {
    blockRoll.classList.toggle("open-is");
    return false;
});
messageList.addEventListener('click', function () {
    blockRoll.classList.remove("open-is");
    return false;
});
chatChatIcon.addEventListener('click', function () {
    blockRoll.classList.remove("open-is");
    return false;
});

let rollNetwork = document.querySelector('.roll-network');
function getScrollPercentage() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let documentHeight = Math.max(
        document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
        document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
    );
    return ((scrollTop / (documentHeight - windowHeight)) * 100);
}
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        if(getScrollPercentage() > 97){
            rollNetwork.classList.add('roll-network_scrollbottom');
        }
        if(getScrollPercentage() < 97){
            rollNetwork.classList.remove('roll-network_scrollbottom');
        }
    };
});;
});
// jQuery
$(document).ready(function(){
    /* NUMBERS SECTION */
	$(window).on("scroll", (function() {
		if($(".botfaqtor__numbers").hasClass("animated") && !$(".botfaqtor__numbers").hasClass("numEnd")) {
			$(".botfaqtor__numbers-count").each((function() {
				function e(e, t) {
					return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t || " ")
				}
				const t = $(this);
				$({
					Count: t.text()
				}).animate({
					Count: t.parent().attr("data-count")
				}, {
					duration: 1500,
					easing: "linear",
					step: function() {
						t.text(Math.floor(this.Count))
					},
					complete: function() {
						t.text(this.Count).css({
						}), document.querySelector(".botfaqtor__numbers-count--a").innerHTML = e(1232439510),
							document.querySelector(".botfaqtor__numbers-count--b").innerHTML = e(391507260),
							document.querySelector(".botfaqtor__numbers-count--c").innerHTML = e(18838),
						$(".botfaqtor__numbers").addClass('numEnd');
					}
				})
			}));
		}
	}));


	$.getJSON("../../data_news.json", function (data_news) {
		$.each(data_news, function (i, item_news) {
			$(".ency__box").append(
				'<a href="https://botfaqtor.ru' + item_news['post_name'] + '" target="_blank" class="ency__item">' +
					'<div class="ency__item-img">' +
						'<img data-src="https://botfaqtor.ru' + item_news['img'] +'" class="lazyload">' +
					'</div>' +
					'<ul class="ency__item-tags">' +
						'<li>' +
							item_news['date'] +
						'</li>' +
					'</ul>' +
					'<div class="ency__item-title">' +
						item_news['post_title'] +
					'</div>' +
					'<div class="ency__item-text">' +
						item_news['post_excerpt'] +
					'</div>' +
				'</a>'
			);
		});
	});
});
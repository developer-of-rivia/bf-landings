/* PLUGINS */
// lazysizes
/*! lazysizes - v5.3.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
/*! lazysizes - v5.3.2 */

!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,z,c){"use strict";var g,y,b,f,r,l,s,v,m;e.addEventListener&&(g=c.cfg,y=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,r=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,l=/\(|\)|'/,s={contain:1,cover:1},v=function(e,t){var a;t&&((a=t.match(r))&&a[1]?e.setAttribute("type",a[1]):e.setAttribute("media",g.customMedia[t]||t))},m=function(e){var t,a,r,i,s;e.target._lazybgset&&(a=(t=e.target)._lazybgset,(r=t.currentSrc||t.src)&&(i=l.test(r)?JSON.stringify(r):r,(s=c.fire(a,"bgsetproxy",{src:r,useSrc:i,fullSrc:null})).defaultPrevented||(a.style.backgroundImage=s.detail.fullSrc||"url("+s.detail.useSrc+")")),t._lazybgsetLoading&&(c.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading))},addEventListener("lazybeforeunveil",function(e){var t,a,r,i,s,l,n,d,u,o;!e.defaultPrevented&&(t=e.target.getAttribute("data-bgset"))&&(u=e.target,(o=z.createElement("img")).alt="",o._lazybgsetLoading=!0,e.detail.firesLoad=!0,a=t,r=u,i=o,s=z.createElement("picture"),l=r.getAttribute(g.sizesAttr),n=r.getAttribute("data-ratio"),d=r.getAttribute("data-optimumx"),r._lazybgset&&r._lazybgset.parentNode==r&&r.removeChild(r._lazybgset),Object.defineProperty(i,"_lazybgset",{value:r,writable:!0}),Object.defineProperty(r,"_lazybgset",{value:s,writable:!0}),a=a.replace(y," ").split(b),s.style.display="none",i.className=g.lazyClass,1!=a.length||l||(l="auto"),a.forEach(function(e){var t,a=z.createElement("source");l&&"auto"!=l&&a.setAttribute("sizes",l),(t=e.match(f))?(a.setAttribute(g.srcsetAttr,t[1]),v(a,t[2]),v(a,t[3])):a.setAttribute(g.srcsetAttr,e),s.appendChild(a)}),l&&(i.setAttribute(g.sizesAttr,l),r.removeAttribute(g.sizesAttr),r.removeAttribute("sizes")),d&&i.setAttribute("data-optimumx",d),n&&i.setAttribute("data-ratio",n),s.appendChild(i),r.appendChild(s),setTimeout(function(){c.loader.unveil(o),c.rAF(function(){c.fire(o,"_lazyloaded",{},!0,!0),o.complete&&m({target:o})})}))}),z.addEventListener("load",m,!0),e.addEventListener("lazybeforesizes",function(e){var t,a,r,i;e.detail.instance==c&&e.target._lazybgset&&e.detail.dataAttr&&(t=e.target._lazybgset,r=t,i=(getComputedStyle(r)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!s[i]&&s[r.style.backgroundSize]&&(i=r.style.backgroundSize),s[a=i]&&(e.target._lazysizesParentFit=a,c.rAF(function(){e.target.setAttribute("data-parent-fit",a),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit})))},!0),z.documentElement.addEventListener("lazybeforesizes",function(e){var t,a;!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==c&&(e.detail.width=(t=e.target._lazybgset,a=c.gW(t,t.parentNode),(!t._lazysizesWidth||a>t._lazysizesWidth)&&(t._lazysizesWidth=a),t._lazysizesWidth))}))});;
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
$(document).ready(function() {
	$(".calculator input").keyup(function () {
    $(this).val(thousandSeparator($(this).val().replace(/[^0-9]/g, "")));
    var yandex = $("[name='yandex']").val().replace(/\s/g, '');
    var google = $("[name='google']").val().replace(/\s/g, '');
    var vk = $("[name='vk']").val().replace(/\s/g, '');
    var priceyandex = $("[name='priceyandex']").val().replace(/\s/g, '');
    var pricegoogle = $("[name='pricegoogle']").val().replace(/\s/g, '');
    var pricevk = $("[name='pricevk']").val().replace(/\s/g, '');
    //var theme = $(".theme option").prop('selected', true).change().attr('data');
    var theme = "";

    $( ".calculator select option:selected" ).each(function() {
        theme += $( this ).attr('data') + " ";
    });



    if(priceyandex == ''){
        if(theme == undefined){
            resultyandex = (yandex / 100 * theme)*50;
        }else{
            resultyandex = (yandex / 100 * 25)*50;
        }
    }else{
        if(theme == undefined){
            resultyandex = (yandex / 100 * theme)*priceyandex;
        }else{
            resultyandex = (yandex / 100 * 25)*priceyandex;
        }
    }

    if(pricegoogle == ''){
        if(theme == undefined){
            resultgoogle = (google / 100 * theme)*50;
        }else{
            resultgoogle = (google / 100 * 25)*50;
        }
    }else{
        if(theme == undefined){
            resultgoogle = (google / 100 * theme)*pricegoogle;
        }else{
            resultgoogle = (google / 100 * 25)*pricegoogle;
        }
    }

    if(pricevk == ''){
        if(theme == undefined){
            resultvk = (vk / 100 * theme)*50;
        }else{
            resultvk = (vk / 100 * 25)*50;
        }
    }else{
        if(theme == undefined){
            resultvk = (vk / 100 * theme)*pricevk;
        }else{
            resultvk = (vk / 100 * 25)*pricevk;
        }
    }



    resultSUM = resultyandex+resultgoogle+resultvk;
    var sumyear = resultSUM*12

    
    if(sumyear || resultSUM){
        $('.year span').text(thousandSeparator(Math.ceil(sumyear)));
        $('.month span').text(thousandSeparator(Math.ceil(resultSUM)));
    }else{
        $('.year span').text('0');
        $('.month span').text('0');
    }
    
});




$(".calculator select").change(function(){
    var yandex = $("[name='yandex']").val().replace(/\s/g, '');
    var google = $("[name='google']").val().replace(/\s/g, '');
    var vk = $("[name='vk']").val().replace(/\s/g, '');

    var priceyandex = $("[name='priceyandex']").val().replace(/\s/g, '');
    var pricegoogle = $("[name='pricegoogle']").val().replace(/\s/g, '');
    var pricevk = $("[name='pricevk']").val().replace(/\s/g, '');

    var theme = "";
    $( ".calculator select option:selected" ).each(function() {
        theme += $( this ).attr('data') + " ";
    });


    if(priceyandex == ''){
        resultyandex = (yandex / 100 * theme)*50;
    }else{
        resultyandex = (yandex / 100 * theme)*priceyandex;
    }

    if(pricegoogle == ''){
        resultgoogle = (google / 100 * theme)*50;
    }else{
        resultgoogle = (google / 100 * theme)*pricegoogle  
    }


    if(pricevk == ''){
        resultvk = (vk / 100 * theme)*50;
    }else{
        resultvk = (vk / 100 * theme)*pricevk
    }


    resultSUM = resultyandex+resultgoogle+resultvk;
    var sumyear = resultSUM*12

    
    if(sumyear || resultSUM){
        $('.year span').text(thousandSeparator(Math.ceil(sumyear)));
        $('.month span').text(thousandSeparator(Math.ceil(resultSUM)));
    }else{
        $('.year span').text('0');
        $('.month span').text('0');
    }

});

var thousandSeparator = function (str) {
var parts = (str + '').split('.'),
    main = parts[0],
    len = main.length,
    output = '',
    i = len - 1;

while (i >= 0) {
    output = main.charAt(i) + output;
    if ((len - i) % 3 === 0 && i > 0) {
        output = ' ' + output;
    }
    --i;
}

if (parts.length > 1) {
    output += '.' + parts[1];
}
return output;
};;
	/* SCRIPTS */
	// refcookies
	/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});
//# sourceMappingURL=/sm/b0ce608ffc029736e9ac80a8dd6a7db2da8e1d45d2dcfc92043deb2214aa30d8.map;
	//Получаем GET
    function getGet(name) {
        var s = window.location.search;
        s = s.match(new RegExp(name + '=([^&=]+)'));
        return s ? s[1] : false;
    }
    if (getGet('ref')) {
        var ref = getGet('ref');
        Cookies.set('ref', ref, {
            domain: '.botfaqtor.ru',
            expires: 30
        });
    }
    var cookiesRef = Cookies.get('ref');
    $(".header__connect").click(function () {
        if (cookiesRef) {
			location.href = 'https://botfaqtor.ru/signin?service=vk-clickfraud';
			//location.href='https://botfaqtor.ru/signin?service=vk-clickfraud&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=vk-clickfraud';
		}
		return false;
    });
});
/* PLUGINS */
// graph-tabs
@import 'modern-landings/common/plugins/graph-tabs/script.js';
// lazysizes
@import 'modern-landings/common/plugins/lazysizes/lazysizes.min.js';
@import 'modern-landings/common/plugins/lazysizes/ls.bgset.min.js';
// accordion
@import 'modern-landings/common/plugins/accordion/accordion.js';
// lazymap
@import 'modern-landings/common/plugins/lazymap/lazymap.js';
/* smooth scroll */
@import 'modern-landings/common/plugins/smooth-scroll/main.js'


/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	@import 'modern-landings/common/sections/header/header.js'
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    @import 'modern-landings/common/sections/popup/main.js';
    /* ---------------------- SERVICES ---------------------------- */
    @import 'modern-landings/common/sections/services-section/services-section-tabs.js';
	/* ROLL NETWORK */
    @import 'modern-landings/common/sections/roll-network/roll-network.js';
});
// jQuery
$(document).ready(function() {
	@import 'modern-landings/common/sections/calc-section/calc-section2.js';
    /* SCRIPTS */
	// refcookies
	@import 'modern-landings/common/scripts/refcookies/js.cookie.min.js';
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
			location.href = 'https://botfaqtor.ru/signin?service=sites-antibot';
			//location.href='https://botfaqtor.ru/signin?service=sites-antibot&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=sites-antibot';
		}
		return false;
    });
});
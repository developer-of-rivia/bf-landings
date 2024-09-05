/* PLUGINS */
// lazysizes
@import 'modern-landings/common/plugins/lazysizes/lazysizes.min.js';
@import 'modern-landings/common/plugins/lazysizes/ls.bgset.min.js';
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
	/* ROLL NETWORK */
    @import 'modern-landings/common/sections/roll-network/roll-network.js';

	
	/* отправленная форма */
	let strGET = window.location.search.replace( '?', '');
	let mainFormOverlay = document.querySelector('.main__form-overlay');
    if(strGET == 'submitted=true'){
		mainFormOverlay.classList.add('main__form-overlay_active');
	}
});
// jQuery
$(document).ready(function() {
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
			location.href = 'https://botfaqtor.ru/signin?service=yandex-clickfraud';
			//location.href='https://botfaqtor.ru/signin?service=yandex-clickfraud&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=yandex-clickfraud';
		}
		return false;
    });

	@import 'modern-landings/common/sections/calc-section/calc-section2.js';
});
/* PLUGINS */
// lazysizes
@import 'modern-landings/common/plugins/lazysizes/lazysizes.min.js';
@import 'modern-landings/common/plugins/lazysizes/ls.bgset.min.js';
// accordion
@import 'modern-landings/common/plugins/accordion/accordion.js';
// lazymap
@import 'modern-landings/common/plugins/lazymap/lazymap.js';
/* smooth scroll */
@import 'modern-landings/common/plugins/smooth-scroll/main.js';
/* graph tabs */
@import 'modern-landings/common/plugins/graph-tabs/script.js';


/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	@import 'modern-landings/common/sections/header/header.js'
    // services
    @import 'modern-landings/common/sections/services-section/services-section.js';
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    @import 'modern-landings/common/sections/popup/main.js';
	/* ROLL NETWORK */
    @import 'modern-landings/common/sections/roll-network/roll-network.js';


    /* demo js */
    const tabs1 = new GraphTabs('tab', {
        isChanged: (tabs) => {
          console.log(tabs);
        }
    });
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
			location.href = 'https://botfaqtor.ru/signin?service=google-clickfraud';
			//location.href='https://botfaqtor.ru/signin?service=google-clickfraud&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=google-clickfraud';
		}
		return false;
    });
    /* demo select */
    $('.demo-select').on('click', function(event){
        $(this).toggleClass(' demo-select_open');
    });

    $(document).on('click', '[class^="demo-select__box-item"]', function(e) {
        e.preventDefault();

        console.log(e.target.parent.prev);

        // console.log(e.target);
    });
});
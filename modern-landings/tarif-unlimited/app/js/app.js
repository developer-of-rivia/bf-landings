/* PLUGINS */
// lazysizes
@import 'modern-landings/common/plugins/lazysizes/lazysizes.min.js';
@import 'modern-landings/common/plugins/lazysizes/ls.bgset.min.js';
// wowjs
@import 'modern-landings/common/plugins/wowjs/wow.js';
/* ---------------------- WOW JS ---------------------------- */
wow = new WOW();
wow.init();
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
	/* ROLL NETWORK */
    @import 'modern-landings/common/sections/roll-network/roll-network.js';
});
// jQuery
$(document).ready(function(){
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
			location.href = 'https://botfaqtor.ru/signin?service=tarif-unlimited';
			//location.href='https://botfaqtor.ru/signin?service=tarif-unlimited&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=tarif-unlimited';
		}
		return false;
    });
	/* */
	$(window).on("scroll", (function() {
		if($(".numbers__box").hasClass("animated") && !$(".numbers__box").hasClass("numEnd")) {
			$(".numbers__item-count").each((function() {
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
							color: "red"
						}), document.querySelector(".numbers__item-count--a").innerHTML = e(982600637),
							document.querySelector(".numbers__item-count--b").innerHTML = e(39163000),
							document.querySelector(".numbers__item-count--c").innerHTML = e(11198),
							document.querySelector(".numbers__item-count--d").innerHTML = e(51211);
						$(".numbers__box").addClass('numEnd');
					}
				})
			}));
		}
	}))
});
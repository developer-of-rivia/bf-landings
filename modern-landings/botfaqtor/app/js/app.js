/* PLUGINS */
// graph-tabs
@import 'modern-landings/common/plugins/graph-tabs/script.js';
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
    /* ---------------------- SERVICES TABS ---------------------------- */
    @import 'modern-landings/common/sections/services-section/services-section-tabs.js';
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
            location.href = 'https://botfaqtor.ru/signin';
            //location.href='https://botfaqtor.ru/signin?ref='+cookiesRef;
        } else {
            location.href = 'https://botfaqtor.ru/signin';
        }
        return false;
    });
	/* SECTIONS */
    /* numbers section */
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
						}), document.querySelector(".botfaqtor__numbers-count--a").innerHTML = e(1447795526),
							document.querySelector(".botfaqtor__numbers-count--b").innerHTML = e(543051330),
							document.querySelector(".botfaqtor__numbers-count--c").innerHTML = e(23274),
						$(".botfaqtor__numbers").addClass('numEnd');
					}
				})
			}));
		}
	}));
	/* news-blog section */
	$.getJSON("json/data_news.json", function (data_news) {
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
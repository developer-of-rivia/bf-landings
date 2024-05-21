/* PLUGINS */
// graph-tabs
@import 'common/plugins/graph-tabs/script.js';
// lazysizes
@import 'common/plugins/lazysizes/lazysizes.min.js';
@import 'common/plugins/lazysizes/ls.bgset.min.js';
// wowjs
@import 'common/plugins/wowjs/wow.js';
/* ---------------------- WOW JS ---------------------------- */
wow = new WOW();
wow.init();
// accordion
@import 'common/plugins/accordion/accordion.js';
// lazymap
@import 'common/plugins/lazymap/lazymap.js';
/* smooth scroll */
@import 'common/plugins/smooth-scroll/main.js'



/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	@import 'common/sections/header/header.js'
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    @import 'common/sections/popup/main.js';
    /* ---------------------- SERVICES TABS ---------------------------- */
    @import 'common/sections/services-section/services-section-tabs.js';
	/* ROLL NETWORK */
    @import 'common/sections/roll-network/roll-network.js';
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
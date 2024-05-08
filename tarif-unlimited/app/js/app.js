/* PLUGINS */
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


/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	@import 'common/sections/header/header.js'
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    @import 'common/sections/popup/main.js';
	/* ROLL NETWORK */
    @import 'common/sections/roll-network/roll-network.js';
});
// jQuery
$(document).ready(function(){
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
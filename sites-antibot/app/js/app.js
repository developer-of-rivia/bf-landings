/* PLUGINS */
// graph-tabs
@import 'common/plugins/graph-tabs/script.js';
// lazysizes
@import 'common/plugins/lazysizes/lazysizes.min.js';
@import 'common/plugins/lazysizes/ls.bgset.min.js';
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
    /* ---------------------- SERVICES ---------------------------- */
    @import 'common/sections/services-section/services-section-tabs.js';
	/* ROLL NETWORK */
    @import 'common/sections/roll-network/roll-network.js';
});
// jQuery
$(document).ready(function() {
	@import 'common/sections/calc-section/calc-section2.js';
});
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


/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	@import 'common/sections/header/header.js'
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    @import 'common/sections/popup/main.js';
    /* ---------------------- PROT TABS ---------------------------- */
    @import 'common/sections/prot-section/prot.js';
    /* ---------------------- SERVICES ---------------------------- */
    @import 'common/sections/services-section/services-tabs.js';
	/* ROLL NETWORK */
    @import 'common/sections/roll-network/roll-network.js';
});
// jQuery
$(document).ready(function() {
	@import 'common/sections/calc-section/calc-section2.js';

	// Результат замера источников трафика
	$.getJSON("json/top-direct-platforms.json", function (data) {
		$.each(data.Items, function (i, Items) {
			var i = i+1;

			var HumanPercent = Items.HumanPercent;
			var UntargetedPercent = Items.UntargetedPercent;
			var BotPercent = Items.BotPercent;
			var FraudPercent = Items.FraudPercent;
			

			$(".jsplatforms").append('<tr>'
			+ '<td>'+i+'</td>'
			+ '<td><div class="lable"><label class="checkbox favicon"><img alt=""src="https://s2.googleusercontent.com/s2/favicons?domain_url=' + Items.UtmKey + '"></label></div><label class="text-labl">' + Items.UtmKey + '</label></td>'
			+ '<td class="text-center">' + Math.round(HumanPercent) + '%</td>'
			+ '<td class="text-center">' + Math.round(UntargetedPercent) + '%</td>'
			+ '<td class="text-center">' + Math.round(FraudPercent) + '%</td>'
			+ '<td class="text-center">' + Math.round(BotPercent) + '%</td>'
			+ '</tr>');
		});
	});
});
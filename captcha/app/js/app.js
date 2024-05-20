/* PLUGINS */
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
	/* ---------------------- SERVICES ---------------------------- */
    @import 'common/sections/services-section/services-section.js';
	/* ROLL NETWORK */
    @import 'common/sections/roll-network/roll-network.js';
});


/* SCRIPTS */
document.addEventListener('DOMContentLoaded', () => {
})


/* WITHOUT EVENT */
/* ---------------------- MAIN SLIDER ---------------------------- */
const slider = document.querySelector('.slider');
const before = document.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
	let width = slider.offsetWidth;
	beforeImage.style.width = `${width}px`;
	beforeImage.style.minWidth = `${width}px`;
});

change.addEventListener('mousedown', () => {
	isActive = true;
});

body.addEventListener('mouseup', () => {
	isActive = false;
});

body.addEventListener('mouseleave', () => {
	isActive = false;
});

const beforeAfterSlider = (x) => {
	let shift = Math.max(0, Math.min(x, slider.offsetWidth));
	before.style.width = `${shift}px`;
	change.style.left = `${shift}px`;

	if(change.style.left < '180px'){
		console.log(change.style.left);
	}
};

const pauseEvents = (e) => {
	e.stopPropagation();
	e.preventDefault();
	return false;
};

body.addEventListener('mousemove', (e) => {
	if (!isActive) {
		return;
	}

	let x = e.pageX;
	x -= slider.getBoundingClientRect().left;
	beforeAfterSlider(x);
	pauseEvents(e);
});

change.addEventListener('touchstart', () => {
	isActive = true;
});

body.addEventListener('touchend', () => {
	isActive = false;
});

body.addEventListener('touchcancel', () => {
	isActive = false;
});

body.addEventListener('touchmove', (e) => {
	if (!isActive) {
		return;
	}

let x;

let i;
for (i = 0; i < e.changedTouches.length; i++) {
	x = e.changedTouches[i].pageX; 
}

x -= slider.getBoundingClientRect().left;

beforeAfterSlider(x);
pauseEvents(e);
});
/* PLUGINS */
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
    @import 'modern-landings/common/sections/services-section/services-section.js';
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
			location.href = 'https://botfaqtor.ru/signin?service=captcha';
			//location.href='https://botfaqtor.ru/signin?service=captcha&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=captcha';
		}
		return false;
    });
});





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
$(".years").html("2017-2023");

$("#close-banner").click(function(){
    $(".header").css('');
    $("#banner-top").html('');
    $("section.first-screen").css('margin-top','70px');
    return false;
});

$(".cl1").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb1").addClass("active");
});

$(".cl2").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb2").addClass("active");
});

$(".cl3").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb3").addClass("active");
});

$(".cl4").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb4").addClass("active");
});

$(".nav-menu .close").click(function () {
    $(".nav-menu").removeClass("active");
});

$(".menu-burger").click(function () {
    $(".nav-menu").toggleClass("active");
});


if(getGet('ref')){
	var ref =  getGet('ref');
	Cookies.set('ref', ref, { domain: '.botfaqtor.ru', expires: 30 });
}

var cookiesRef = Cookies.get('ref');

$(".clicklogin").click(function () {
    if(cookiesRef){
        location.href = 'https://botfaqtor.ru/signin?service=antibot';
        //location.href='https://botfaqtor.ru/signin?service=antibot&ref='+cookiesRef;
    }else{
        location.href = 'https://botfaqtor.ru/signin?service=antibot';
    }
    return false;
});


$(".click-project").click(function () {
    var click = "1";
    $(".project-title").toggleClass("is-open");
});

$(document).mouseup(function (e) {
    var div = $(".project-title");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass("is-open");
    }
});

$(".priceClick").click(function () {
    $(".nav-menu").removeClass("active");

    $('html,body').animate({
        scrollTop: $(".price").offset().top - 60
    }, 500);
    return false;
});






var kop = " коп";
var rub = " руб";

var antibotPriceB = "1.5";
var antibotPriceV = "1";

function ceilB(n) {
    hh = Math.ceil((n) * 100) / 100;
    return hh;
}

var thousandSeparator = function (str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;

    while (i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
};


PriceB = antibotPriceB;
PriceV = antibotPriceV;
$(".baseTar .prcOP").html(PriceB + " " + kop);
$(".vipTar .prcOP").html(PriceV + " " + kop);


$(".calc-block .sum").removeClass("active");
$("input[name='calc']").val(null);


$("input[name='calc']").keyup(function () {
    $(this).val(thousandSeparator($(this).val().replace(/[^0-9]/g, "")));
    $(".calc-block .sum").addClass("active");
    var value = $(this).val().replace(/\s/g, '');
    var sumBAse = value * PriceB;
    var sumVip = value * PriceV;
    if (sumBAse >= 100) {
        sumBAse = value * PriceB;
        r = rub;
        $(".baseTar .prcOkl").html(thousandSeparator(sumBAse / 100) + "" + r);
    } else {
        sumBAse = value * PriceB;
        r = kop;
        $(".baseTar .prcOkl").html(thousandSeparator(sumBAse) + "" + r);
    }
    if (sumVip >= 100) {
        sumVip = value * PriceV;
        r = rub;
        $(".vipTar .prcOkl").html(thousandSeparator(sumVip / 100) + "" + r);
        $(".vipTar .prcOklss").html(thousandSeparator((sumBAse - sumVip) / 100) + "" + r);
    } else {
        sumVip = value * PriceV;
        r = kop;
        $(".vipTar .prcOkl").html(thousandSeparator(sumVip) + "" + r);
        $(".vipTar .prcOklss").html(thousandSeparator(sumBAse - sumVip) + "" + r);
    }
});


//Получаем GET
function getGet(name) {var s = window.location.search;s = s.match(new RegExp(name + '=([^&=]+)'));return s ? s[1] : false;}



let rollNetwork = document.querySelector('.roll-network');

function getScrollPercentage() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let documentHeight = Math.max(
		document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
		document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
	);
	return ((scrollTop / (documentHeight - windowHeight)) * 100);
}
document.addEventListener("DOMContentLoaded", function() {
	window.onscroll = function() {
        if(getScrollPercentage() > 97){
            rollNetwork.classList.add('roll-network_scrollbottom');
        }
        if(getScrollPercentage() < 97){
            rollNetwork.classList.remove('roll-network_scrollbottom');
        }
	};
});
$(".years").html("2017-2023");

// Результат замера источников трафика
$.getJSON("/landing/json/top-ads-platforms.json", function (data) {
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
            //alert(Items.UtmKey)
        });
 
});

$("[data-bem]").click(function (e) { return false; });
$("[data-bem]").hover(function (e) {
    var bottom = $(window).height() - $(this).height();
    var X = $(this).position().left + 200; // РїРѕР»РѕР¶РµРЅРёСЏ РїРѕ РѕСЃРё X
    var XTail = 100; // РїРѕР»РѕР¶РµРЅРёСЏ РїРѕ РѕСЃРё X
    var Y = bottom - $(this).offset().top - 110; // РїРѕР»РѕР¶РµРЅРёСЏ РїРѕ РѕСЃРё Y
    var T = $(this).attr("data-bem");
    $(".popup__content__quest .popup__content").html(T);
    $(".popup__content__quest").addClass("open");
    var width_popup = $(".popup__content__quest").width();
    $(".popup__tail").css("left", + $(this).attr("data-left") + "px");
    $(".popup__content__quest").css("bottom", Y + "px");

    return false;
});

$(".popup__content__quest").hover(function (e) { return false; }, function () {
    $(".popup__content__quest").removeClass("open");
    $(".popup__content__quest").css("bottom", "0px");
    //$(".popup__content__quest .popup__content").html(false);
    $(this).hasClass("tooltip").removeClass("active");
    return false;
});

$(document).mouseup(function (e) {
    var div = $(".popup__content__quest");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass("open").removeAttr('style');
        //$(".popup__content__quest .popup__content").html(false);
        $("[data-bem]").removeClass("active");
    }
});


$("#close-banner").click(function(){
    $(".header").css('');
    $("#banner-top").html('');
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

if (getGet('ref')) {
    var ref = getGet('ref');
    Cookies.set('ref', ref, { domain: 'botfaqtor.ru', expires: 30 });
}

var cookiesRef = Cookies.get('ref');

$(".clicklogin").click(function () {
    if (cookiesRef) {
        location.href = 'https://botfaqtor.ru/signin?service=google-clickfraud';
        //location.href='https://botfaqtor.ru/signin?service=google-clickfraud&ref='+cookiesRef;
    } else {
        location.href = 'https://botfaqtor.ru/signin?service=google-clickfraud';
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

var adsPriceB = "100";
var adsPriceV = "70";

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


PriceB = adsPriceB;
PriceV = adsPriceV;
$(".baseTar .prcOP").html(PriceB / 100 + " " + rub);
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

$(".ico-roll-network").click(function () {
    $(".block-roll").toggleClass("open-is");
    return false;
});
$(".message-list, .chat-chat-icon").click(function () {
    $(".block-roll").removeClass("open-is");
    return false;
});

//Получаем GET
function getGet(name) { var s = window.location.search; s = s.match(new RegExp(name + '=([^&=]+)')); return s ? s[1] : false; }





//Ymap start
var spinner = $('.ymap-container').children('.loader');
var check_if_load = 0;
var myMap, myPlacemark;

function init() {
    myMap = new ymaps.Map('map', {
        center: [55.779003, 37.629475],
        zoom: 16,
        controls: []
    });
    // myMap.behaviors.disable('scrollZoom');
    // myMap.behaviors.disable('drag');
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
        myPlacemark = new ymaps.Placemark([55.779003, 37.629475], {
            hintContent: 'г. Москва, ул. Щепкина, д.28, офис 413',
            balloonContent: 'г. Москва, ул. Щепкина, д.28, офис 413'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map.webp',
            iconImageSize: [62, 62],
            iconImageOffset: [-15, -42]
        });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "auto",
            position: {
                top: 120,
                left: 15
            }
        }
    });
    myMap.controls.add(zoomControl);
    myMap.geoObjects.add(myPlacemark);

    //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMap.layers.get(0).get(0);
    //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
    waitForTilesLoad(layer).then(function () {
        //Скрываем
        spinner.removeClass('is-active')
    });
};

function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer),
            readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function () {
                resolve();
            });
        }
    });
}

function getTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
                layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
    return null;
}

function loadScript(url, callback) {
    var script = document.createElement("script");
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Другие браузеры
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

var ymap = function () {
    $('.ymap-container').mouseenter(function () {
        if (check_if_load == 0) {
            check_if_load = 1;
            spinner.addClass('is-active');
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1",
                function () {
                    ymaps.load(init);
                });
        }
    });
}

$(function () {
    //Map Yandex
    ymap();
});







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
$(".years").html("2017-2023");

// Результат замера источников трафика
$.getJSON("/landing/json/sources-check.json", function (data) {
    $.each(data, function (i, item) {

        var str = item['CheckDate'];
        var res = str.split("-", 2);
        var res = str.split("T", 1);
        var temp = res;

        $(".jsGetSourcesChecks").append('<tr>'
            + '<td>' + temp + '</td>'
            + '<td><div class="lable"><label class="checkbox favicon"><img alt=""src="https://s2.googleusercontent.com/s2/favicons?domain_url=' + item['Source'] + '"></label></div><label class="text-labl">' + item['Source'] + '</label></td>'
            + '<td class="text-center">' + item['TrafficTypeName'] + '</td>'
            + '<td class="text-center k">' + item['TotalRounding'] + '</td>'
            + '<td class="text-center pr">' + item['TargetedPercent'] + '</td>'
            + '<td class="text-center pr">' + item['UntargetedPercent'] + '</td>'
            + '<td class="text-center pr">' + item['BotsPercent'] + '</td>'
            + '<td class="text-center pr">' + item['ComparisonBotParameter'] + '</td>'
            + '</tr>');
    });
});

$(".nav-menu .close").click(function () {
    $(".nav-menu").removeClass("active");
});

$(".menu-burger").click(function () {
    $(".nav-menu").toggleClass("active");
});


$(".clicklogin").click(function () {
    location.href='https://botfaqtor.ru/signin';
    return false;
});


$(".click-project").click(function () {
    var click = "1";
    $(".project-title").toggleClass("is-open");
});

$(document).mouseup(function (e){
    var div = $(".project-title");
    if (!div.is(e.target) && div.has(e.target).length === 0) { 
        div.removeClass("is-open");
    }
});

$(".priceClick").click(function () {
    $(".nav-menu").removeClass("active");

	$('html,body').animate({
		scrollTop:$(".price").offset().top-60
	}, 500);
	return false;
});

$("#close-banner").click(function(){
    $(".header").css('');
    $("#banner-top").html('');
    return false;
});
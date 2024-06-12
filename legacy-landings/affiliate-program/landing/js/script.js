$(".right-bonus").hover(function (e) {
    $(".infos").addClass("active");
});


$(document).mouseup(function (e) {
    var div = $(".infos");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass("active");
    }
});

$(".infos").hover(function (e) { return false; }, function () {
    $(this).removeClass("active");
    return false;
});


$(".menu-head li a").click(function () {
    $(".sect-nav li").removeClass("active");
    $(".menu-head li").removeClass("active");
    $(".section").removeClass("active");

    $(this).parent().addClass("active");
    var href = $(this).attr('href');
    $(href).addClass("active");

    $(".sect-nav li a[href='"+href+"']").parent().addClass("active");

    if(href == "#how-much-pay"){
        $(".sect-nav").addClass("dark");
    }else{
        $(".sect-nav").removeClass("dark");
    }

    return false;
})

$(".sect-nav li a").click(function () {
    $(".menu-head li").removeClass("active");
    $(".sect-nav li").removeClass("active");
    $(".section").removeClass("active");
    $(this).parent().addClass("active");
    var href = $(this).attr('href');
    $(href).addClass("active");

    $(".menu-head li a[href='"+href+"']").parent().addClass("active");

    if(href == "#how-much-pay"){
        $(".sect-nav").addClass("dark");
    }else{
        $(".sect-nav").removeClass("dark");
    }
    return false;
})


$(".sect-nav ul li a").click(function () {
    $(".sect-nav ul li").removeClass("active");
    $(".section").removeClass("active");
    $(this).parent().addClass("active");
    var href = $(this).attr('href');
    $(href).addClass("active");
    return false;
})


$(window).bind('mousewheel DOMMouseScroll', function (event) {
    var $active = $('section div.active');
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        var $new = $active.prev();

    } else {
        var $new = $active.next();
    }
    if ($new.length > 0) {
        $active.removeClass('active');
        $new.addClass('active');
        $new[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    }

    if($active.hasClass("last")){
        $active.addClass('active');
        $("#how-to-become-partner").addClass('active');
        //alert($active2.attr("class"));
    }

    if($new.attr("id") == "how-much-pay"){
        $(".sect-nav").addClass("dark");
    }else{
        $(".sect-nav").removeClass("dark");
    }
    
    return false;
});


$(window).bind('mousewheel DOMMouseScroll', function (event) {
    var $active2 = $('.menu-head li.active');
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        var $new2 = $active2.prev();

    } else {
        var $new2 = $active2.next();
    }
    if ($new2.length > 0) {
        $active2.removeClass('active');
        $new2.addClass('active');
        $new2[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    }
    if($active2.hasClass("last")){
        $new2.addClass('active');
    }



    return false;
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
    var $active3 = $('.sect-nav li.active');
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        var $new3 = $active3.prev();

    } else {
        var $new3 = $active3.next();
    }
    if ($new3.length > 0) {
        $active3.removeClass('active');
        $new3.addClass('active');
        $new3[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    }
    if($active3.hasClass("last")){
        
        $new3.addClass('active');
 
    }

    return false;
});











$(".burger").click(function () {
    $(".menu-head").toggleClass("active");
});

$(".close").click(function () {
    $(".menu-head").removeClass("active");
});

$(".menu-head ul li a").click(function () {
    $(".menu-head").removeClass("active");
    href = $(this).attr("href");

    $('html, body').animate({

        scrollTop: $(".section" + href).offset().top - 50  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки 
});

$(".menu-burger").click(function () {
    $(".nav-menu").addClass("active");
});


$(".click-project").click(function () {
    $(".project-title").toggleClass("is-open");
});

$(document).mouseup(function (e) {
    var div = $(".project-title");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass("is-open");
    }
});

$(".projectClick").click(function () {
    $('html,body').animate({
        scrollTop: $(".project-screen").offset().top - 20
    }, 500);
    return false;
});



$(".clicklogin").click(function () {
    location.href = 'https://botfaqtor.ru/signin';
    return false;
});



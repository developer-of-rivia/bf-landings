$(".nav-menu .close").click(function () {
    $(".nav-menu").removeClass("active");
});

$(".menu-burger").click(function () {
    $(".nav-menu").toggleClass("active");
});


if (getGet('ref')) {
    var ref = getGet('ref');
    Cookies.set('ref', ref, { domain: '.botfaqtor.ru', expires: 30 });
}
var cookiesRef = Cookies.get('ref');

$(".clicklogin").click(function () {
    if (cookiesRef) {
        location.href = 'https://botfaqtor.ru/signin';
        //location.href='https://botfaqtor.ru/signin?ref='+cookiesRef;
    } else {
        location.href = 'https://botfaqtor.ru/signin';
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

$("#close-banner").click(function(){
    $(".header").css('');
    $("#banner-top").html('');
    return false;
});


//Получаем GET
function getGet(name) { var s = window.location.search; s = s.match(new RegExp(name + '=([^&=]+)')); return s ? s[1] : false; }


$("form").submit(function () {
    var old_link = $("[name=url]").val();

    if (old_link != '') {

        //var pattern = /^http(s?):\/\//i;
        var pattern = /(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

        if (pattern.test(old_link)) {

            try {

                var dataURL = $.ajax({
                    type: "POST",
                    url: "https://server.botfaqtor.ru/api/create-short-link",
                    data: { Url: old_link },
                    dataType: 'json',
                    context: document.body,
                    global: false,
                    async: false,
                    success: function (data) {
                        return data;
                    },
                    error: function (jqXHR) { console.log('Ошибка выполнения'); },
                    complete: function () { console.log('Завершение выполнения'); }
                }).responseText;

                var urls = JSON.parse(dataURL);
                var old_link = urls.Url;
                var new_link = urls.ShortLink

                var path = new_link.split('/');
                var path = path[path.length - 1];

                var hashs = JSON.stringify({
                    hash: path,
                    long_url: old_link,
                    short_url: new_link,
                }),
                    hashed = localStorage.getItem('hashed');

                hashed = hashed ? JSON.parse(hashed) : [];
                hashed.push(hashs);
                localStorage.setItem("hashed", JSON.stringify(hashed));

                $(".result-item.err").remove("");
                $(".result").prepend('<div class="result-item"><div class="old-link"><span>' + old_link + '</span></div><div class="new-link"><span>' + new_link + '</span><button class="copy" data-url="' + new_link + '">копия</button></div></div>');

                setCopy();
                $(this)[0].reset();

            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) {
                    alert('Quota exceeded!');
                }
            }

        } else {
            $(".result-item.err").remove("");
            $(".result").prepend('<div class="result-item err">Невозможно сократить эту ссылку. Адрес сайта введен не верно!</div>');
        }

    } else {
        $(".result-item.err").remove("");
        $(".result").prepend('<div class="result-item err">Невозможно сократить эту ссылку. Адрес сайта введен не верно!</div>');
    }

    return false;
});

hashed() == true;

function hashed() {
    var d = localStorage.getItem('hashed');
    var d = JSON.parse(d);
    var hash, d;
    for (hash in d) {
        var hashs = JSON.parse(d[hash]);

        $(".result").prepend('<div class="result-item"><div class="old-link"><span>' + hashs.long_url + '</span></div><div class="new-link"><span>' + hashs.short_url + '</span><button class="copy" data-url="' + hashs.short_url + '">копия</button></div></div>');
        setCopy();
    };
    return false;
};


function setCopy() {
    $(".copy").click(function () {
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(this).attr("data-url")).select();
        document.execCommand("copy");
        $tmp.remove();
        $(".result-link").remove();

        $(this).parent().parent().append("<div class='result-link'>Ссылка скопирована!</div>")
        setTimeout(function () {
            $(".result-link").addClass("remove");
            setTimeout(function () { $(".result-link").remove(); }, 3000);
        }, 3000)
        return result;
    });
    $(".new-link span").click(function () {
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(this).text()).select();
        document.execCommand("copy");
        $tmp.remove();
        $(".result-link").remove();

        $(this).parent().parent().append("<div class='result-link'>Ссылка скопирована!</div>")
        setTimeout(function () {
            $(".result-link").addClass("remove");
            setTimeout(function () { $(".result-link").remove(); }, 500);
        }, 3000)
        return result;
    });
}
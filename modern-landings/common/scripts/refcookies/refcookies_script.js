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
            location.href = 'https://botfaqtor.ru/signin';
            //location.href='https://botfaqtor.ru/signin?ref='+cookiesRef;
        } else {
            location.href = 'https://botfaqtor.ru/signin';
        }
        return false;
    });
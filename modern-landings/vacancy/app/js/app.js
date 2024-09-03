/* PLUGINS */
// lazysizes
@import 'modern-landings/common/plugins/graph-modal/graph-modal.js';
@import 'modern-landings/common/plugins/scroll-lock/scroll-lock.min.js';


/* SECTIONS */
// not jQuery
document.addEventListener('DOMContentLoaded', () => {
	/* ---------------------- MENU ---------------------------- */
	@import 'modern-landings/common/sections/header/header.js'
    /* ---------------------- TELEGRAM POPUP ---------------------------- */
    @import 'modern-landings/common/sections/popup/main.js';
    /* --------------- ROLL NETWORK --------------- */
    @import 'modern-landings/common/sections/roll-network/roll-network.js';
    /* vlist */
    let vlistContent = document.querySelectorAll('.vlist__item');
    vlistContent.forEach(vlistContent => {
        let vlistText = vlistContent.querySelector('.vlist__text');
        let vlistShowmore = vlistContent.querySelector('.vlist__showmore');
        let vlistSalary = vlistContent.querySelector('.vlist__salary');
        let vlistIcon = vlistContent.querySelector('.vlist__add-icon');
        let vlistAdd = vlistContent.querySelector('.vlist__add');
        vlistShowmore.addEventListener('click', function() {
            vlistText.classList.toggle('vlist__text_expand');
            vlistSalary.classList.toggle('vlist__salary_open');

            if(vlistShowmore.innerText == 'Показать описание полностью'){
                vlistShowmore.innerText = 'Скрыть описание';
            }
            else if(vlistShowmore.innerText == 'Скрыть описание'){
                vlistShowmore.innerText = 'Показать описание полностью';
            }
        });
        document.querySelector('.block-roll').addEventListener('click', function(){
            this.classList.toggle('open-is');
        });
    });
    /* --------------- VACANCY-MODAL -------------- */
    let $modalScroll = document.querySelector('.graph-modal');
    const modal = new GraphModal({
        isOpen: (modal) => {
            scrollLock.disablePageScroll($modalScroll);
        },
        isClose: () => {
            scrollLock.enablePageScroll($modalScroll);
        }
    });
    document.addEventListener("click", function (e) {
        if(e.target.classList.contains('vlist__respond')){
            clicked = e.target;
            thisVacancy = clicked.closest('.vlist__buttons').previousElementSibling.previousElementSibling.querySelector('.vlist__title').textContent;
            thisVacancy = thisVacancy.trimStart().trimEnd();
            // console.log(thisVacancy);
            document.querySelector('.response__form-vacancy-id').setAttribute('value', thisVacancy);
        }
    });
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
			location.href = 'https://botfaqtor.ru/signin?service=vacancy';
			//location.href='https://botfaqtor.ru/signin?service=vacancy&ref='+cookiesRef;
		} else {
			location.href = 'https://botfaqtor.ru/signin?service=vacancy';
		}
		return false;
    });
    /* ----------- VACANCY-MODAL --------------- */
    $('.vacancy__button').on('click', function(){
        $('.tyformail-modal').removeClass('graph-modal-open fadeInUp animate-open');
    })
    $('.vlist__respond').on('click', function(){
        $('.tyformail-modal').removeClass('graph-modal-open fadeInUp animate-open');
    })






    /* MAILER */
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    function getFormData($form) {
        var config = {};
        $form.serializeArray().map(function (item) {
            if (config[item.name]) {
                if (typeof (config[item.name]) === "string") {
                    config[item.name] = [config[item.name]];
                }
                config[item.name].push(item.value);
            } else {
                config[item.name] = item.value;
            }
        });
        var Id = getUrlParameter("id");
        config["Id"] = Id;
        var Id = getUrlParameter("h");
        config["Href"] = Id;
        var Id = getUrlParameter("r");
        config["Ref"] = Id;
        return config;
    }
    $('#mailer').submit(function (e) {
        $form = $(this);
        var formData = JSON.stringify(getFormData($form));

        $.ajax({
            type: 'POST',
            url: 'https://server.botfaqtor.ru/api/Account/send-job-request',
            contentType: 'application/json; charset=utf-8',
            cache: false,
            data: formData,
            success: function () {
                // $('.wrtt').html("<div class='ok'>Ваша заявка успешно отправлена! В ближайшее время с вами свяжется наш специалист для уточнения необходимой информации.</div>");
                $('.response-modal').removeClass('graph-modal-open fadeInUp animate-open');
                $('.tyformail-modal').addClass('graph-modal-open fadeInUp animate-open');
                $form[0].reset();
                ym(49731991,'reachGoal','bfqt20');

            }
        });
        e.preventDefault();
    });


    
});
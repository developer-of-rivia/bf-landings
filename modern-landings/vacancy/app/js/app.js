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
	/* ROLL NETWORK */
    @import 'modern-landings/common/sections/roll-network/roll-network.js';
    /* vlist */
    let vlistContent = document.querySelectorAll('.vlist__item');
    vlistContent.forEach(vlistContent => {
        let vlistText = vlistContent.querySelector('.vlist__text');
        let vlistShowmore = vlistContent.querySelector('.vlist__showmore');
        let vlistSalary = vlistContent.querySelector('.vlist__salary');
        let vlistIcon = vlistContent.querySelector('.vlist__add-icon');
        let vlistAdd = vlistContent.querySelector('.vlist__add');
        /* троеточие с меню */
        // vlistIcon.addEventListener('mouseover', function(){
        //     vlistAdd.classList.add('vlist__add_active');
        // })
        
        // vlistContent.addEventListener('mouseleave', function(){
        //     vlistAdd.classList.remove('vlist__add_active');
        // })

        // window.addEventListener('click', e => {
        //     const target = e.target
        //     if (!target.closest('.vlist__add')) {
        //       vlistAdd.classList.remove('vlist__add_active');
        //     }
        // })
        /* */
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
    /* vacancy-modal */
    let $modalScroll = document.querySelector('.graph-modal');
    const modal = new GraphModal({
        isOpen: (modal) => {
            scrollLock.disablePageScroll($modalScroll);
        },
        isClose: () => {
            scrollLock.enablePageScroll($modalScroll);
        }
    });
});
// jQuery
$(document).ready(function(){
    /* vacancy-modal */
    $('.vacancy__button').on('click', function(){
        $('.tyformail-modal').removeClass('graph-modal-open fadeInUp animate-open');
    })
    $('.vlist__respond').on('click', function(){
        $('.tyformail-modal').removeClass('graph-modal-open fadeInUp animate-open');
    })
});
/* ---------------------- MENU ---------------------------- */
let burgerIcon = document.querySelector('.header__toggle-burger');
let closeIcon = document.querySelector('.header__toggle-close');
let menu = document.querySelector('.header__panel');
let scrollObject = document.querySelector('.header__panel');
burgerIcon.addEventListener('click', function(){
    closeIcon.classList.remove('hidden');
    burgerIcon.classList.add('hidden');
    menu.classList.add('header__panel--open');
    // scrollLock.disablePageScroll(scrollObject);
})
closeIcon.addEventListener('click', function(){
    closeIcon.classList.add('hidden');
    burgerIcon.classList.remove('hidden');
    menu.classList.remove('header__panel--open');
    // scrollLock.enablePageScroll(scrollObject);
})
// dropdown
let dropdowns = document.querySelectorAll('.nav__dropdown');
dropdowns.forEach(dropdown => {
    document.addEventListener('click', (e) => {
        if(!e.composedPath().includes(dropdown)){
            dropdown.classList.remove('nav__dropdown--open');
        }
    });
    dropdown.addEventListener('click', function(){
        dropdown.classList.toggle('nav__dropdown--open');
    });
});
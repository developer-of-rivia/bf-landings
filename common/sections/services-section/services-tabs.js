let serviceTabsSelectHeader = document.querySelector('.service__tabs-select-header');
let serviceTabsSelectBody = document.querySelector('.service__tabs-select-body');
let serviceTabsSelectDesc = document.querySelector('.service__tabs-select-desc');
let thisTabClicked;

serviceTabsSelectHeader.addEventListener('click', function(){
  serviceTabsSelectBody.classList.toggle('service__tabs-select-body_active');
  serviceTabsSelectHeader.classList.toggle('service__tabs-select-header_active');
});

const tabsService = new GraphTabs('service-tab', {
    isChanged: (tabs) => {
      clickedTabContent = document.querySelector('.service .tabs__nav-btn--active').innerHTML;
      clickedTabDescription = document.querySelector('.service .tabs__panel--active .service__tabs-item-title').innerHTML;
      serviceTabsSelectHeader.innerHTML = clickedTabContent;
      serviceTabsSelectDesc.innerHTML = clickedTabDescription;

      serviceTabsSelectBody.classList.remove('service__tabs-select-body_active');
      serviceTabsSelectHeader.classList.remove('service__tabs-select-header_active');

      if (document.documentElement.clientWidth < 768) {
        document.querySelector('.service').scrollIntoView();
      }
    }
});




if (document.documentElement.clientWidth < 768) {
  const sAccordions = document.querySelectorAll('.service__item');
  sAccordions.forEach(el => {
      el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.service__item-top');
          const content = self.querySelector('.service__item-content');
  
          self.classList.toggle('service__item_open');
  
          // если открыт аккордеон
          if (self.classList.contains('service__item_open')) {
              control.setAttribute('aria-expanded', true);
              content.setAttribute('aria-hidden', false);
              content.style.maxHeight = content.scrollHeight + 'px';
          } else {
              control.setAttribute('aria-expanded', false);
              content.setAttribute('aria-hidden', true);
              content.style.maxHeight = null;
          }
      });
  });


  let serviceTabsSelect = document.querySelector('.service__tabs-select');
  let serviceTabsSelectHeight = serviceTabsSelect.clientHeight;
  let serviceSection = document.querySelector('.service');
  let serviceSectionOffset = document.querySelector('.service').offsetTop;
  let serviceBox = document.querySelectorAll('.service__box');
  let posTop;
  document.addEventListener('scroll', function(){
    posTop = window.pageYOffset;
    if(posTop > (serviceSectionOffset - 35)){
      serviceTabsSelect.classList.add('service__tabs-select_fixed');
      for(let i = 0; serviceBox.length > i; i++){
        serviceBox[i].classList.add('service__box_open');
      }
    }
    else if(posTop < (serviceSectionOffset - 35)) {
      serviceTabsSelect.classList.remove('service__tabs-select_fixed');
      for(let i = 0; serviceBox.length > i; i++){
        serviceBox[i].classList.remove('service__box_open');
      }
    }
  });
}
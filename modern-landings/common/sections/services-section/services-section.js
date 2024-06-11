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
}
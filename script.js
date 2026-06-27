(function () {
  'use strict';

  const BOTPRESS_URL = 'https://carritobooti.netlify.app/';

  const whatsappBtns = document.querySelectorAll('.btn--whatsapp');

  whatsappBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const card = this.closest('.card');
      const productName = card.querySelector('.card__title').textContent.trim();
      const productPrice = card.querySelector('.card__price').textContent.trim();

      const whatsappUrl = new URL(BOTPRESS_URL);
      whatsappUrl.searchParams.set('ref', 'booti_menu');
      whatsappUrl.searchParams.set('producto', productName);
      whatsappUrl.searchParams.set('precio', productPrice);

      window.open(whatsappUrl.toString(), '_blank');
    });
  });

  const heroBtn = document.querySelector('.btn--hero');
  if (heroBtn) {
    heroBtn.addEventListener('click', function (e) {
      const url = new URL(BOTPRESS_URL);
      url.searchParams.set('ref', 'booti_hero');
      window.open(url.toString(), '_blank');
    });
  }

  const mapBtn = document.querySelector('.btn--map');
  if (mapBtn) {
    mapBtn.addEventListener('click', function (e) {
      const googleMapsUrl = 'https://maps.google.com/?q=Calle+Principal+123+Ciudad';
      window.open(googleMapsUrl, '_blank');
    });
  }

  const navLinks = document.querySelectorAll('.header__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();

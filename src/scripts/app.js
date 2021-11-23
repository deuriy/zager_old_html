import Swiper from 'swiper/bundle';

// function slideToggle(elem) {
//   if (elem.offsetHeight < elem.scrollHeight) {
//     elem.style.maxHeight = `${elem.scrollHeight}px`;
//   } else {
//     elem.style.maxHeight = '';
//   }
// }

// let menuHamburger = document.querySelector('.MenuHamburger');
// let mobileNavigation = document.querySelector('.MobileNavigation');
// let mobileMainMenu = document.querySelector('.MobileNavigation .MainMenu');
// // let closeMobileNavigation = document.querySelector('.MobileNavigation_closeBtn');

// menuHamburger.addEventListener('click', function (e) {
//   menuHamburger.classList.toggle('MenuHamburger-active');
//   mobileNavigation.classList.toggle('MobileNavigation-opened');

//   document.body.style.overflow = document.documentElement.clientWidth < 768 ? 'hidden' : '';

//   e.preventDefault();
// });

// document.addEventListener('click', function (e) {
//   if (document.documentElement.clientWidth > 767) {
//     if (!mobileNavigation.contains(e.target) && !menuHamburger.contains(e.target)) {
//       menuHamburger.classList.remove('MenuHamburger-active');
//       mobileNavigation.classList.remove('MobileNavigation-opened');
//     }
//   }
// });

// closeMobileNavigation.addEventListener('click', function (e) {
//   menuHamburger.classList.remove('MenuHamburger-active');
//   mobileNavigation.classList.remove('MobileNavigation-opened');
//   document.body.style.overflow = '';
// });

let thumbs = new Swiper(".Swiper_thumbs", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

let gallery = new Swiper(".Swiper_gallery", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,

  thumbs: {
    swiper: thumbs,
    slideThumbActiveClass: 'Swiper_thumbsSlide-active'
  }
});

document.addEventListener('click', function (e) {
  let secondaryMenuTitle = e.target.closest('.SecondaryMenu_title');

  if (!secondaryMenuTitle) return;

  let secondaryMenu = secondaryMenuTitle.closest('.SecondaryMenu');
  secondaryMenu.classList.toggle('SecondaryMenu-expanded');
  slideToggle(secondaryMenu);
});
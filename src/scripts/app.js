import Swiper from 'swiper/bundle';

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
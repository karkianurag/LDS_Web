Fancybox.bind('[data-fancybox="image__gallery"]', {
  loop: true,
});

const swiper = new Swiper(".similarSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

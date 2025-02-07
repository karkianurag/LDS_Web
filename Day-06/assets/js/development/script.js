const swiper1 = new Swiper(".myswiper", {
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  watchSlidePreogress: true,

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

const swiper2 = new Swiper(".myswiper2", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  thumbs: {
    swiper: swiper1,
  },
});

const swiper3 = new Swiper(".swiper-container", {
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  // Options for Fancybox (if needed)
  infinite: true, // Allow cycling through content in the lightbox
});

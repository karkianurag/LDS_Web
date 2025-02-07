const swiper = new Swiper(".swiper-container", {
  loop: true,

  slidesPerView: 4,
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

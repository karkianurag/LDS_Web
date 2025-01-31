const swiper = new Swiper(".swiper-container", {
  loop: true, // Infinite loop
  // Number of visible slides
  slidesPerView: "auto",
  spaceBetween: 0, // Space between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

// Initialize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  // Options for Fancybox (if needed)
  infinite: true, // Allow cycling through content in the lightbox
});

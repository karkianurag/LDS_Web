const totalSlides1 = document
  .querySelector(".myswiper")
  .querySelectorAll(".swiper-slide").length;

const totalSlides2 = document
  .querySelector(".swiper-container")
  .querySelectorAll(".swiper-slide").length;
console.log(totalSlides2);

const swiper1 = new Swiper(".myswiper", {
  loop: false,

  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  watchSlideProgress: true,

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

const swiper2 = new Swiper(".myswiper2", {
  loop: false,

  slidesPerView: 1,
  spaceBetween: 20,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // autoplay: {
  //   delay: 2900,
  //   disableOnInteraction: false,
  // },

  thumbs: {
    swiper: swiper1,
  },
  on: {
    slideChange: function () {
      updateProgressBar(this);
    },
    slideProgress: function () {
      updateProgressBar(this);
    },
  },
});

window.addEventListener("load", () => {
  updateProgressBar(swiper2); // Update progress bar on page load
});

//
function updateProgressBar(swiperInstance) {
  const progressBars = document.querySelectorAll(".hero__progress-bar-fill");

  progressBars.forEach((progressBar, index) => {
    let progress = (swiperInstance.progress * 100).toFixed(2);

    // Check if the progress bar is active
    if (index === swiperInstance.activeIndex) {
      progressBar.style.animation = "fillProgressBar 3s linear forwards";
      progressBar.style.width = `${progress}%`;
    } else {
      progressBar.style.animation = "none";
      progressBar.style.width = "0%";
    }
  });
}

const swiper3 = new Swiper(".swiper-container", {
  loop: totalSlides2 > 1,

  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      loop: totalSlides2 > 1,
      slidesPerView: 2,
    },
    // 768: {
    //   loop: totalSlides2 > 2,
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    1024: {
      loop: totalSlides2 > 4,
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

const swiper4 = new Swiper(".testimonial-swiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  // on: {
  //   slideChange: function () {
  //     // Update opacity whenever the slide changes
  //     updateSlideOpacity();
  //   },
  // },
  navigation: {
    nextEl: ".testimonial__button-right",
    prevEl: ".testimonial__button-left",
  },
  // autoplay: {
  //   delay: 2900,
  //   disableOnInteraction: false,
  // },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  // Options for Fancybox (if needed)
  infinite: true, // Allow cycling through content in the lightbox
});

Fancybox.bind('[data-fancybox="success__gallery"]', {
  // Options for Fancybox (if needed)
  infinite: true, // Allow cycling through content in the lightbox
});

// const progressBars = document.querySelectorAll(".hero__progress-bar");

const swiper1 = new Swiper(".myswiper", {
  loop: true,

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
  autoplay: {
    delay: 2900,
    disableOnInteraction: false,
  },

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
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
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

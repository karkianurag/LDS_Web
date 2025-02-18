const totalSlides1 = document
  .querySelector(".myswiper")
  .querySelectorAll(".swiper-slide").length;

const totalSlides2 = document
  .querySelector(".swiper-container")
  .querySelectorAll(".swiper-slide").length;

const debateMember = document.querySelectorAll(".debate__member");
const debateStatus = document.querySelector("#status");
const debateTeamSelection = document.querySelector("#debate__team");
const year = document.querySelector("#year");
const reset = document.querySelector(".debate__reset-action");
const memberStatus = document.querySelectorAll(".debate__member-status");
// console.log(memberStatus);
const memberTeam = document.querySelectorAll(".debate__member-team");
const memberYear = document.querySelectorAll(".debate__member-year");

let memberStat = [...memberStatus].map((memberStat) => {
  return memberStat.innerText.toLowerCase();
});

let teamMember = [...memberTeam].map((memberTeam) => {
  let firstValue = memberTeam.innerText.toLowerCase();
  return firstValue.split(" ")[0];
});

let yearMember = [...memberYear].map((memberYear) => {
  return memberYear.innerText;
});
// console.log(yearMember);

// console.log(memberStat);
// console.log(teamMember);
// console.log(yearMember);

let debateGroup =
  debateTeamSelection.options[debateTeamSelection.selectedIndex].value;
let debateStat = debateStatus.options[debateStatus.selectedIndex].value;
let period = year.options[year.selectedIndex].value;

debateStatus.addEventListener("change", () => {
  debateStat = debateStatus.options[debateStatus.selectedIndex].value;
  console.log(debateStat);

  memberStat.forEach((memberStat, i) => {
    if (debateStat !== "status") {
      // debateMember[i].style.display = "block";
      if (memberStat !== debateStat) {
        debateMember[i].style.display = "none";
      } else {
        debateMember[i].style.display = "block";
      }
    } else {
      debateMember[i].style.display = "block";
    }
  });
});

debateTeamSelection.addEventListener("change", () => {
  debateGroup =
    debateTeamSelection.options[debateTeamSelection.selectedIndex].value;
  console.log(debateGroup);

  teamMember.forEach((teamMember, i) => {
    if (debateGroup !== "team") {
      // debateMember[i].style.display = "block";
      if (teamMember !== debateGroup) {
        debateMember[i].style.display = "none";
      } else {
        debateMember[i].style.display = "block";
      }
    } else {
      debateMember[i].style.display = "block";
    }
  });
});

year.addEventListener("change", () => {
  period = year.options[year.selectedIndex].value;
  console.log(period);

  yearMember.forEach((yearMember, i) => {
    if (period !== "year") {
      // debateMember[i].style.display = "block";
      if (yearMember !== period) {
        debateMember[i].style.display = "none";
      } else {
        debateMember[i].style.display = "block";
      }
    } else {
      debateMember[i].style.display = "block";
    }
  });
});

reset.addEventListener("click", () => {
  debateStatus.selectedIndex = 0;
  debateTeamSelection.selectedIndex = 0;
  year.selectedIndex = 0;
  period = year.options[year.selectedIndex].value;
  debateGroup =
    debateTeamSelection.options[debateTeamSelection.selectedIndex].value;
  debateStat = debateStatus.options[debateStatus.selectedIndex].value;
  console.log(period);
  console.log(debateGroup);
  console.log(debateStat);
  [...debateMember].forEach((debateMember) => {
    debateMember.style.display = "block";
  });
});

window.addEventListener("load", () => {
  period = year.options[year.selectedIndex].value;
  debateStat = debateStatus.options[debateStatus.selectedIndex].value;
  debateGroup =
    debateTeamSelection.options[debateTeamSelection.selectedIndex].value;
  // console.log(period);
  // console.log(debateGroup);
  // console.log(debateStat);
});

function filter() {}

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
  spaceBetween: 0,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 3000,
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
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  initialSlide: 1,
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

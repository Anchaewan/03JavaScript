const swiper = new Swiper(".slide-visual", {
  navigation: {
    nextEl: ".slide-visual__next",
    prevEl: ".slide-visual__prev",
  },
  slidesPerView: 1,
  loop: true,
});

const swiper2 = new Swiper(".slide-main", {
  pagination: {
    el: ".slide-main__paging",
  },
});

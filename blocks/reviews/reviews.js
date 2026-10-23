document.querySelectorAll(".reviews__slider").forEach((slider) => {
  new Swiper(slider.querySelector(".reviews__track"), {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: slider.querySelector(".reviews__arrow--prev"),
      nextEl: slider.querySelector(".reviews__arrow--next"),
    },
  });
});

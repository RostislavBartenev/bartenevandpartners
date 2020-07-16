let mySwiper1 = new Swiper('.swiper-container-1', {

  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

})

let mySwiper2 = new Swiper('.swiper-container-2', {

  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

    

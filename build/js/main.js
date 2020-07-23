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



function validateForm(form) {
  $(form).validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Слишком короткое имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Некорректно введен номер"
      }
    },
    
  submitHandler: function(form) {
  $.ajax({
    type: "POST",
    url: "send.php",
    data: $(form).serialize(),
    success: function (response) {
      $(form)[0].reset();
      modalAnswer.toggleClass('modal-answer_visible');
      $(".modal-answer__title").text('Спасибо! Заявка успешно отправлена.');
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error(jqXHR+ " " + textStatus);
    }
  });
  }
  });
}
validateForm('.modal__form');
validateForm('.footer__form');

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
    
  var modal = $('.modal'),
  modalAnswer = $('.modal-answer'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close'),
  closeBtnAnswer = $('.modal-answer__close');

modalBtn.on('click', function () {
  modal.toggleClass('modal_visible');
});

closeBtn.on('click', function () {
  modal.toggleClass('modal_visible');
});
closeBtnAnswer.on('click', function () {
  modalAnswer.toggleClass('modal-answer_visible');
});

$(document).keydown(function (e) {
  if (e.code == 'Escape') {
    modal.removeClass('modal_visible');
  };
});

$(document).on('click', function (e) {
  if (modal.is(e.target)) {
    modal.removeClass('modal_visible');
  };
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.scrollUp').fadeIn();
  } else {
    $('.scrollUp').fadeOut();
  }
});


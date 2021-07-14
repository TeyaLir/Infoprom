$(function () {

  // Бургер меню
  function toggleMenu() {
    $('.menu__burger, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  }
  $(document).ready(function () {
    $('.menu__btn').click(function (event) {
      $('.menu__btn, .menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
    $('.menu__list-link').each(function (i) {
      this.onclick = toggleMenu;
    });
  });

  // Выезд и заезд блока form при клике на вид работ в секции worktype
  $(".worktype__item").click(function () {
    if ($(".worktype__form").hasClass("active")) {
      $(".worktype__form").toggleClass("active");
      $(".worktype__form").slideUp(350);
    } else {
      $(".worktype__form").toggleClass("active");
      $(".worktype__form").slideDown(350);
    }
  });

  // Маска для телефона
  $(".phone__mask").mask("+7 (999) 999-99-99");

  // Прикрепить файл с ТЗ в форме заявки на рассчёт стоимости
  $(document).ready(function () {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
      var label = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
          fileName = e.target.value.split('\\').pop();

        if (fileName)
          label.querySelector('span').innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });
  });

  // Слайдер в разделе "Выполненные проекты"
  $('.completed__slider').slick({
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<span>' + (i + 1) + '</span>';
    },
  });
  $('.item__single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.item__nav',
    arrows: false,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
  });
  $('.item__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.item__single',
    dots: false,
    arrows: true,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
  });

  // Слайдер в разделе "Отзывы и благодарности"
  $('.reviews__slider').slick({
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    infinite: true,
  });

  // Слайдер в разделе "Наши клиенты"
  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
  });

});

// Fancybox для раздела "Отзывы и благодарности"
$('[data-fancybox]').fancybox({
  loop: true,
});


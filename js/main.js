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

});
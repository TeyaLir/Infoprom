$(function(){

  $(document).ready(function() {
    $('.menu__btn').click(function(event) {
      $('.menu__btn, .menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

});


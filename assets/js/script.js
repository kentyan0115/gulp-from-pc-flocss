jQuery(function ($) { 
  // ドロワー
  $('.js-hamburger').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.js-drawer').addClass('active');
      $('body').css('overflow', 'hidden');
    } else {
      $('.js-drawer').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
  $('.js-drawer-item').click(function() {
    $('.js-hamburger').toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.js-drawer').addClass('active');
    } else {
      $('.js-drawer').removeClass('active');
    }
  });

  // フローティングボタン
  $('.js-pagetop').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $('.js-pagetop').hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $('.js-pagetop').fadeIn();
    } else {
      $('.js-pagetop').fadeOut();
    }
  });
});

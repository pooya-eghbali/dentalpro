function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}
$(document).ready(function () {
  $('#main-page-slides .item').each(function () {
    var color = $(this).data('color');
    var invert = invertColor(color);
    $(this).css('background', color);
    $(this).find('.buttons a').css('background', invert);
  })
  $('#main-page-slides').owlCarousel({
      loop:true,
      margin:0,
      responsiveClass:true,
      rtl: true,
      nav:false,
      items:1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
  })
  $('#featured-products-slides').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      rtl: true,
      nav:false,
      dots: false,
      autoWidth: true
  })
  $('#similar-products-slides').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      rtl: true,
      nav:false,
      dots: false,
      autoWidth: true
  })
  $('#brand-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      rtl: true,
      nav:false,
      dots: false,
      autoWidth: true,
  })
  $('#featured-products-slides .item .description').dotdotdot();
  $('#similar-products-slides .item .description').dotdotdot();
  $('.search-results .item .description').dotdotdot();
  $('.filter-expander').each(function () {
    $(this).data('isOpen', false);
    $(this).click(function (e) {
      e.preventDefault();
      var target = $(this).data('target');
      var isOpen = $(this).data('isOpen');
      if (isOpen) {
        $(this).find('.chevron').html('<i class="fa fa-chevron-down" aria-hidden="true"></i>');
        $(target).hide();
      } else {
        $(this).find('.chevron').html('<i class="fa fa-chevron-up" aria-hidden="true"></i>');
        $(target).show();
      }
      $(this).data('isOpen', !isOpen);
    })
  });
  $('.menu-expander').each(function () {
    $(this).data('isOpen', false);
    $(this).click(function (e) {
      e.preventDefault();
      var $target = $(this).parent().find('.menu-link-collection');
      var isOpen = $(this).data('isOpen');
      if (isOpen) {
        $(this).find('.chevron').html('<i class="fa fa-chevron-down" aria-hidden="true"></i>');
        $target.hide();
      } else {
        $(this).find('.chevron').html('<i class="fa fa-chevron-up" aria-hidden="true"></i>');
        $target.show();
      }
      $(this).data('isOpen', !isOpen);
    })
  });
  $('.product-images-gallery img').each(function () {
    $(this).mouseenter(function () {
      var img = $(this).closest('.product-images').find('.product-image-display');
      var src = $(this).attr('src');
      img.css('opacity', 0);
      setTimeout(function () {
        img.attr('src', src).css('opacity', 1);
      }, 200)
    })
  })
  $('.page').click(function () {
    $('body').removeClass('menu-open');
    $('body').removeClass('no-overlay');
  })
  $('.close-x-link').click(function () {
    $('body').removeClass('menu-open');
    $('body').removeClass('no-overlay');
  })
  $('.fixed-menu a').each(function () {
    $(this).click(function (e) {
      if ($(this).attr('href') != '#') {
        return
      }
      $('.fixed-menu a').removeClass('active');
      $(this).addClass('active');
      $('.fixed-menu-menu').css('display', 'none');
      $($(this).data('target')).css('display', 'block');
      e.preventDefault();
      $('body').addClass('menu-open');
      if($(this).hasClass('no-overlay')) {
        $('body').addClass('no-overlay');
      }
      e.stopPropagation();
    });
  })
  $('.fixed-menu-contents').click(function (e) {
    e.stopPropagation();
  });
  var cache_top = $('#sticky-search-bar').position().top + $('#sticky-search-bar').height();
  var cache_ctop = $('#search-container').position().top + $('#search-container').height() - 250;
  var cache_height = $('#sticky-search-bar').height();
  function fixDiv() {
    var $cache = $('#sticky-search-bar');
    if (cache_ctop > $(window).scrollTop() && $(window).scrollTop() > cache_top){
      $cache.addClass('fixed-search-bar');
      $('.search-results').css('margin-top', cache_height * 3);
    }
    else {
      $cache.removeClass('fixed-search-bar');
      $('.search-results').css('margin-top', 0);
    }
  }
  $(window).scroll(fixDiv);
  fixDiv();
})

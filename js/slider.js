$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt="next"></button>'
  });
});


$(function(){
   $('.products__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // dots: true,
      // arrows:false,
      // appendArrows: $('.products__title-control'),
      prevArrow: $('.button-left'),
      nextArrow: $('.button-right'),
    });
 });




$(function () {
   $('.slider-products').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // dots: true,
      // arrows:false,
      // appendArrows: $('.products__title-control'),
      prevArrow: $('.title__btn-left'),
      nextArrow: $('.title__btn-right'),
   });

   $(".rate-star").rateYo({
      rating: 3.6,
      starWidth: "15px",
      readOnly: true,
      ratedFill: "#ffc000"
   });
});




$(function () {

   $('.slider-products').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // dots: true,
      // arrows:false,
      // appendArrows: $('.products__title-control'),
      prevArrow: $('.products .title__btn-left'),
      nextArrow: $('.products .title__btn-right'),
   });
   // slider-followers
   $('.slider-followers').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // dots: true,
      // arrows:false,
      // appendArrows: $('.products__title-control'),
      prevArrow: $('.followers .title__btn-left'),
      nextArrow: $('.followers .title__btn-right'),
   });

   $(".products .rate-star").rateYo({
      rating: 3.6,
      starWidth: "15px",
      readOnly: true,
      ratedFill: "#ffc000"
   });
   $(".newest .rate-star").rateYo({
      rating: 3.6,
      starWidth: "12px",
      readOnly: true,
      ratedFill: "#ffc000"
   });

   $(".burger").on('click', function () {
      $('.header .menu__list').slideToggle();
   });

   // dropdown menu header
$('.notification__link ')

   $(document).on("click", function (ev) {
      
      if(! $( ".notification, .header__author-box,  .message, .basket")
      .has($(ev.target)).length){
         $('.dropdown-top-content').slideUp(0).prev().toggle(false);
      }
      console.log($(".notification, .header__author-box,  .message, .basket").has($(ev.target)).length);
      
   })

   
   $('.header__author-box, .header__notification, .header__message, .header__basket').on('click', function (ev) {
      var dropdown = $(this).find('.dropdown-top-content');
      $('.dropdown-top-content').not(dropdown).slideUp(0).prev().toggle(false);
      dropdown.prev().toggle();
      if (dropdown.is(":hidden"))
         dropdown.stop().slideDown('fast');
      else
         dropdown.stop().slideUp(0);
   });
   //=============



   try {
      var mixer = mixitup('.newest__box');
   } catch (error) {
      console.log(error);
   }
});


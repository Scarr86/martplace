

$(function () {

   new WOW().init();


   // formstyler
   $('input[type="file"], select').styler();
   //===============

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


   $(".category-card .rate-star").rateYo({
      rating: 4.5,
      starWidth: "15px",
      readOnly: true,
      ratedFill: "#ffc000"
   })

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
   $(".dropdown__btn").on("click", function () {

      let content = $(this).next(".dropdown__content");
      let list = content.find(".dropdown__list");
      $(".dropdown__content").not(content).removeClass('show');
      $(".dropdown__list").not(list).stop().slideUp(0);
      content.toggleClass('show');
      list.slideToggle('fast');

   });

   $(window).on("click", function (ev) {
      if (!$(ev.target).closest(".dropdown").length) {
         $(".dropdown__content").removeClass('show');
         $(".dropdown__list").stop().slideUp(0);
      }
   })


   //==== category ==========

   $(".category-card-h").hide();
   
   $(".filter__control-grid, .filter__control-list").on("click", function (ev){
      $(".filter__control").children().removeClass('active');
      $(this).addClass("active");
      
      if($(this).hasClass("filter__control-list")){
         $(".category-card-v").hide();
         $(".category-card-h").fadeIn();
      }
      else{
         $(".category-card-h").hide();
         $(".category-card-v").fadeIn();
      }
   });


   //==============



   try {
      var mixer = mixitup('.newest__box');
   } catch (error) {
      console.log(error);
   }
});


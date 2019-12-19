

$(function () {

   new WOW().init();

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
   // $('.notification__link ')

   $(document).on("click", function (ev) {

      if (!$(ev.target).closest(".dropdown-btn, dropdown-top__content").length) {
         $(".dropdown-top").removeClass('active close');
         $(".dropdown-top__content").stop().slideUp(0);
      }
   })


   function toggleDropDown(el) {
      let dropdown = el.find(".dropdown-top");
      let content = el.find(".dropdown-top__content");
      $(".dropdown-top").not(dropdown).removeClass('active');
      $(".dropdown-top__content").not(content).stop().slideUp(0);

      if (dropdown.hasClass("close")) {
         content.stop(false, true);
      } else {
         content.stop(false);
      }

      if (dropdown.hasClass("active")) {
         dropdown.addClass("close");
         content.slideUp('fast', () => {
            dropdown.removeClass("active close");
         });
      } else {
         dropdown.addClass("active");
         content.slideDown()
      }

   }
   $(".dropdown-btn")
      .on("click", (ev) => {
         if ($(ev.target).closest($(".dropdown-top__content")).length) return;
         toggleDropDown($(ev.target).closest($('.dropdown-btn')));
      });
   $("a[type='button']").on("click", (ev) => {
      ev.preventDefault();
   })

   //=============


   try {
      var mixer = mixitup('.newest__box');
   } catch (error) {
      console.log(error);
   }
});


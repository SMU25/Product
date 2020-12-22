$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: false,
    dots: true,
    dotsClass: "header-dots",
    responsive: [
      {
        breakpoint: 1200,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 1,
        }
      },
      
    ]
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
});

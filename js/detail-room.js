// for header
$(document).ready(function () {
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();

    // change color menu
    if (pos_body > 200) {
      $(".header__menu").css({
        "background-color": "#000",
        "box-shadow": "0px 0px 8px #00000052",
      });
    } else {
      $(".header__menu").css({
        "background-color": "transparent",
        "box-shadow": "none",
      });
    }
  });
});

// show menu mobile
$(document).ready(function () {
  $(".header__menu--nav-button").click(function () {
    $(".header__menu--mobile").css("left", "0");
  });
  $("#close-menu-mobile").click(function () {
    $(".header__menu--mobile").css("left", "-210px");
  });
});

// slick
$(".content__image").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 1500,
  //   asNavFor: ".content__imageList",
});
$(".content__imageList").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".content__image",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});

$(".carousel__hook").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

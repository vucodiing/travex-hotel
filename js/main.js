// click and scroll page
$(".header__arrow").click(function () {
  window.scrollTo(0, 631);
});

// scroll page
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

    // change background button menu HOME
    if (pos_body < 630) {
      $("#home").css("background-color", "#cc9966");
    } else {
      $("#home").css("background-color", "inherit");
    }

    // change background button menu ABOUT
    if ((pos_body > 630) & (pos_body < 1545)) {
      $("#about").css("background-color", "#cc9966");
    } else {
      $("#about").css("background-color", "inherit");
    }

    // change background button menu ROOMS
    if (pos_body > 1545) {
      $("#room").css("background-color", "#cc9966");
    } else {
      $("#room").css("background-color", "inherit");
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
// counter
$(document).ready(function () {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// inside hotel
$(".hotel__img").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".hotel__button",
});
$(".hotel__button").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: ".hotel__img",
  centerMode: true,
  focusOnSelect: true,
});

// review
$(".review__content").slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

// logo
$(".logo").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: false,
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
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// special room
$(".slick").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});

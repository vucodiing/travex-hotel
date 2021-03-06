// HEADER
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

// scroll page fix menu
$(document).ready(function () {
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();

    // change color menu
    if (pos_body > 270) {
      $(".tour__menu").css({
        position: "fixed",
        opacity: "1",
        top: "58px",
      });
    } else {
      $(".tour__menu").css({
        position: "absolute",
        opacity: "0.8",
        top: "343px",
      });
    }
  });
});

// select menu detail tour on mobile
$(document).ready(function () {
  $("#btn-collapse").click(function () {
    if ($(".menu__toggle--list").is(":hidden") == true) {
      $(".menu__toggle--list").css("display", "flex");
    } else {
      $(".menu__toggle--list").css("display", "none");
    }
  });

  let b = [".1", ".2", ".3", ".4"];

  b.forEach(function (item) {
    $(item).click(function () {
      let title = $(item).html();
      $(".menu__toggle--content").html(title);
      $(".menu__toggle--list").css("display", "none");
    });
  });
});

// make captcha
let r = Math.random().toString(36).substring(7);
$("#random").html(r);
let value = $("#random").val();
$("#check-captcha").click(function () {
  if (value != r) {
    $("#textInput").addClass("error-input");
    $("#textInput").attr("placeholder", "Captcha not true!");
  }
});

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

// validate
$(document).ready(function () {
  $(".reserve").validate({
    rules: {
      dateIn: {
        required: true,
        date: true,
      },
      dateOut: {
        required: true,
        date: true,
      },
      numberGuy: {
        required: true,
        digits: true,
      },
      name: "required",
      phone: {
        required: true,
        minlength: 10,
        digits: true,
      },
      email: {
        required: true,
        email: true,
      },
      address: "required",
      country: "required",
    },
    messages: {
      dateIn: {
        required: "Please enter date",
        date: "Date not true",
      },
      dateOut: {
        required: "Please enter date",
        date: "Date isn't true",
      },
      numberGuy: {
        required: "Please enter number of people",
        digits: "Not number",
      },
      name: "Please enter your name",
      address: "Please enter your address",
      country: "Please enter your country",
      phone: {
        required: "Please enter your phone",
        minlength: "Min length is 10",
        digits: "Phone isn't true",
      },
      email: {
        required: "Please enter your email",
        email: "Email isn't true",
      },
    },
  });
});

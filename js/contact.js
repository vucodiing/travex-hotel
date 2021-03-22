$(document).ready(function () {
  $(".form").validate({
    rules: {
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
    },
    messages: {
      name: "Vui lòng nhập tên",
      phone: {
        required: "Vui lòng nhập số điện thoại",
        minlength: "Số điện thoại tối thiểu 10 chữ số",
        digits: "Số điện thoại sai định dạng",
      },
      email: {
        required: "Vui lòng nhập email",
        email: "Email không đúng định dạng",
      },
    },
  });
});

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

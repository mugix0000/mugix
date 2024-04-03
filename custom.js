//メニューボタン
$(function () {
    $("#js-hamburger-menu, .navigation_link").on("click", function () {
      $(".navigation").slideToggle(100)
      $(".hamburger-menu").toggleClass("hamburger-menu-open")
      if ($("header").hasClass("header-color-open")) {
        setTimeout(function () {
            $(".header-color").removeClass("header-color-open")
          }, 100);
      } else {
        $(".header-color").addClass("header-color-open")
      }
    });
});
//横からスライド
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show")
    }
  });
});
//背景色変更
$(function(){
  function changeColor(color){
    $("body").stop().css("background-color", color);
  }
  $("#white").on("inview", function (event, isInView) {
    if (isInView) {
      changeColor("white")
    }
  });
  $("#yellow").on("inview", function (event, isInView) {
    if (isInView) {
      changeColor("yellow")
    }
  });
  $("#green").on("inview", function (event, isInView) {
    if (isInView) {
      changeColor("green")
    }
  });
  $("#cyan").on("inview", function (event, isInView) {
    if (isInView) {
      changeColor("cyan")
    }
  });
  $("#blue").on("inview", function (event, isInView) {
    if (isInView) {
      changeColor("blue")
    }
  });
  $("#grey").on("inview", function (event, isInView) {
    if (isInView) {
      changeColor("lightgrey")
    }
  });
});


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
$(function(){
  $(".inview-appear").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-appear");
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
      changeColor("lightgreen")
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
//クライマー
var isScrolling = false;
var id = false;
$(window).on("scroll", function(){
  if (!isScrolling) {
    $(".climber").css("animation", "climbing 0.3s steps(2) infinite");
    isScrolling = true;
  }
  if(id) clearTimeout(id);
  id = setTimeout(function(){
    $(".climber").css("animation", "none");
    $(".climber").css("background-position", "-240px 0");
    isScrolling = false;
  }, 500);
});

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
//スライド
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
//出現
$(function(){
  $(".inview-appear").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-appear");
    }
  });
});
var omikujiOn = false;
//むぎのセリフ
$(function(){
  $("#mugi-button").on("click", function () {
    if (omikujiOn) return;
    omikujiOn = true;
    var randomInt = Math.floor(Math.random() * 11);
    var omikuji = "吉";
    if (randomInt == 0) {
      omikuji = "大吉★";
    }else if (randomInt >= 1 && randomInt < 4) {
      omikuji = "中吉！";
    }else if (randomInt == 9) {
      omikuji = "凶(x_x)";
    }
    $(".mugi-selif").text(omikuji);
    $(".mugi-selif").css("display", "flex");
  });
});
//背景色変更
$(window).scroll(function(){
  if ($(this).scrollTop() < 200) {
    $("body").stop().css("background-color", "white");
  }
});
$(function(){
  $("#background-color-on").on("inview", function (event, isInView) {
    if (isInView) {
      $("body").stop().css("background-color", "#b9d9c3");
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

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
//個別のInview
$(function(){
  $("#title").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-appear");
      $(".inview-wani").stop().addClass("wani");
      $(".inview-kirin").stop().addClass("kirin");
    }
  });
});
$(function(){
  $("#about-us").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-appear");
      $(".inview-rakko").stop().addClass("rakko");
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
//ハチ
var beeLeft = 0;
var beeTop = 0;
var flowers = ["#flower1", "#flower2", "#flower3", "#flower4"];
$(function(){
  beeLeft = $("#flower1").offset().left + 30;
  beeTop = $("#flower1").offset().top + 30;
  $("#bee").css({top:beeTop, left:beeLeft});
});
setInterval(function(){
  var index = Math.floor(Math.random() * flowers.length);
  beeLeft = $(flowers[index]).offset().left + 30;
  beeTop = $(flowers[index]).offset().top + 30;
  if ($("#bee").offset().left < beeLeft) {
    $("#bee").css("transform", "scaleX(-1)");
  }else{
    $("#bee").css("transform", "scaleX(1)");
  };
  $("#bee").animate({top:beeTop, left:beeLeft}, 5000, "swing");
}, 7000);
//あんちゃんのゲーム
var annButtons = ["#ann-game1", "#ann-game2", "#ann-game3", "#ann-game4"];
var ocelos = [false, false, false, false];
$(function(){
  oceloOn = function(int){
    ocelos[int] = true;
    $(annButtons[int]).css({"box-shadow": "0px 0px 0 #7a5143", "transform": "translateY(12px)"});
  };
  oceloOff = function(int){
    ocelos[int] = false;
    $(annButtons[int]).css({"box-shadow": "0px 12px 0 #7a5143", "transform": "translateY(0)"});
  };
  judge = function(){
    if(ocelos.every(element => element === true)){
      $("#annchan").css("right", "0");
    }else{
      $("#annchan").css("right", "-120%");
    }
  };
  $("#ann-game1").on("click", function(){
    (ocelos[0]) ? oceloOff(0) : oceloOn(0);
    (ocelos[1]) ? oceloOff(1) : oceloOn(1);
    (ocelos[2]) ? oceloOff(2) : oceloOn(2);
    judge();
  });
  $("#ann-game2").on("click", function(){
    (ocelos[0]) ? oceloOff(0) : oceloOn(0);
    (ocelos[1]) ? oceloOff(1) : oceloOn(1);
    (ocelos[3]) ? oceloOff(3) : oceloOn(3);
    judge();
  });
  $("#ann-game3").on("click", function(){
    (ocelos[0]) ? oceloOff(0) : oceloOn(0);
    (ocelos[3]) ? oceloOff(3) : oceloOn(3);
    (ocelos[2]) ? oceloOff(2) : oceloOn(2);
    judge();
  });
  $("#ann-game4").on("click", function(){
    (ocelos[3]) ? oceloOff(3) : oceloOn(3);
    (ocelos[1]) ? oceloOff(1) : oceloOn(1);
    (ocelos[2]) ? oceloOff(2) : oceloOn(2);
    judge();
  });
});
//スライダー
$(function(){
  $(".plan-slider").slick({
    autoplay: true,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
  });
})

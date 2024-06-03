//メニューボタン
var menuIsOpen = false;
$(function () {
    $("#js-hamburger-menu, .navigation_link").on("click", function () {
      $(".navigation").toggle();
      $(".hamburger-menu").toggleClass("hamburger-menu-open");
      if ($("header").hasClass("header-color-open")) {
        $(".header-color").removeClass("header-color-open");
        $(".rope").css("z-index", "20");
        $("body").css("overflow", "");
        if ($(window).scrollTop() < 150) {
          $(".scroll-down").css("display", "block");
        }
        menuIsOpen = false;
      } else {
        $(".header-color").addClass("header-color-open");
        $(".rope").css("z-index", "100");
        $("body").css("overflow", "hidden");
        $(".scroll-down").css("display", "none");
        $(".scroll-top").css("display", "none");
        menuIsOpen = true;
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
//むぎのセリフ
var omikujiOn = false;
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
    $(".mugi-selif").css("display", "block");
  });
});
//背景変更
var bgIDs = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6"];
var bgImages = ['url("images/bg-water.svg")', 'url("images/bg-green.svg")', 'url("images/bg-pink.svg")', 'url("images/bg-blue.svg")', 'url("images/bg-salmon.svg")', 'url("images/bg-yellow.svg")'];
$(function(){
  $(".bg-button").on("click", function(){
    var index = bgIDs.indexOf($(this).attr("id"));
    $(".bg").stop().css("background-image", bgImages[index]);
  });
});
//モーダル
$(function(){
  $("#modal-open").on("click", function(){
    var modalId = $(this).data("modal");
    $(modalId).css("display", "flex");
    $("body").css("overflow", "hidden");
  });
})
$(function(){
  $(".button-hide").on("click", function(){
    $(this).parent().parent().css("display", "none");
    $("body").css("overflow", "");
  });
});
//クライマー
var isScrolling = false;
var id = false;
$(window).on("scroll", function(){
  if (!isScrolling) {
    $(".climber").css("animation", "climbing 0.3s steps(2) infinite");
    $(".scroll-down").css("display", "none");
    isScrolling = true;
  }
  if(id) clearTimeout(id);
  id = setTimeout(function(){
    $(".climber").css("animation", "none");
    if ($(window).scrollTop() < 150){
      $(".climber").css("background-position", "-240px 0");
      $(".scroll-down").css("display", "block");
      $(".scroll-top").css("display", "none");
    }else if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
      $(".climber").css("background-position", "-480px 0");
      $(".scroll-down").css("display", "none");
      if(!menuIsOpen){
        $(".scroll-top").css("display", "block");
      }
    }else {
      $(".climber").css("background-position", "-360px 0");
      $(".scroll-down").css("display", "none");
      $(".scroll-top").css("display", "none");
    }
    isScrolling = false;
  }, 500);
});
//初期位置
$(function(){
  if ($(window).scrollTop() < 150) {
    $(".climber").css("background-position", "-240px 0");
    $(".scroll-down").css("display", "block");
  }
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
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
  });
})
$(function(){
  $(".option-slider").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "10%",
  });
})


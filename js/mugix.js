//メニューボタン
var menuIsOpen = false;
$(function () {
    $("#js-hamburger-menu, .navigation_link").on("click", function () {
      $(".navigation").toggle();
      $(".hamburger-menu").toggleClass("hamburger-menu-open");
      if ($("header").hasClass("header-color-open")) {
        $(".header-color").removeClass("header-color-open");
        $("body").css("overflow", "");
        $(".logo").css("color", "");
        $(".hamburger-menu_bar").css("background-color", "#48575e");
        menuIsOpen = false;
      } else {
        $(".header-color").addClass("header-color-open");
        $("body").css("overflow", "hidden");
        $(".logo").css("color", "white");
        $(".hamburger-menu_bar").css("background-color", "white");
        menuIsOpen = true;
      }
    });
});

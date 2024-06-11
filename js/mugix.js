//戻るボタン
$(function(){
  $(".return").on("click", function(){
    if(window.history.length > 1) {
      window.history.back();
    }else{
      window.location.href = "https://www.mugix.net";
    }
  });
})
//Inview
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
//Inview-Menu
$(function(){
  $("#menu").on("inview", function (event, isInView) {
    if (isInView) {
      var children = $(this).children();
      function menuOpen(index) {
        if(index < children.length) {
          var child = $(children[index]);
          child.stop().addClass("is-show");
          setTimeout(function(){
            menuOpen(index + 1);
          }, 200);
        }
      }
      menuOpen(0);
    }
  });
});
//Inview-status
$(function(){
  $(".status-area").on("inview", function (event, isInView) {
    if (isInView) {
      var children = $(this).children();
      function menuOpen(index) {
        if(index < children.length) {
          var child = $(children[index]);
          child.stop().addClass("is-show");
          setTimeout(function(){
            menuOpen(index + 1);
          }, 100);
        }
      }
      menuOpen(0);
    }
  });
});


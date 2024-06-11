$(function(){
  $(".return").on("click", function(){
    if(window.history.length > 1) {
      window.history.back();
    }else{
      window.location.href = "https://www.mugix.net";
    }
  });
})

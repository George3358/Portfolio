$(document).ready(function () {
  
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(this).show("slide", { direction: "right" }, 1000);
    $(".asides").slideToggle(500, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");

      }
    })
  });
  $(".burgerClose").click(function() {
    $(".asides").hide(300);
  });
  
});

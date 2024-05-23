$(function () {
  $(".slider-img").on("click", function () {
    // $(".slider-img").removeClass("active");
    $(this).toggleClass("active");
  });
});
$(".appsSlider").children(`:nth-child(1)`).css("display", "block");
$(".link").on("click", function () {
  let pos = this.id;
  $(".link").removeClass("activeLi");
  $(this).addClass("activeLi");
  $(".slider").css("left", `-${(pos - 1) * 14.3}%`);
});

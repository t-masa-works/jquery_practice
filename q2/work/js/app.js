$(function () {
  $(".modal_open_button").on("click", function () {
    $(".modal_win").fadeIn(500);
  });
  $(".modal_close_button").on("click", function() {
    $(".modal_win").fadeOut(500);
  })
});

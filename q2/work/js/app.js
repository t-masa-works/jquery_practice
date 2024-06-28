$(function () {
  // クラスmodal_open_buttonをクリックした時に
  $(".modal_open_button").on("click", function () {
    // クラスmodal_winを500ミリ秒かけてフェードインさせる
    $(".modal_win").fadeIn(500);
  });
  // クラスmodal_close_buttonをクリックした時に
  $(".modal_close_button").on("click", function() {
    // クラスmodal_winを500ミリ秒かけてフェードインさせる
    $(".modal_win").fadeOut(500);
  })
});

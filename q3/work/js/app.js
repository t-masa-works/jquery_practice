$(function () {
  // クラスdrawer_buttonをクリックした時に
  $(".drawer_button").on("click", function () {
    // クリックした要素に、クリック毎にクラスactiveをつけ外しする
    $(this).toggleClass("active");
    // クラスdrawer_nav_wrapperに、クラスopenをつけ外しする
    $(".drawer_nav_wrapper").toggleClass("open");

    // 条件分岐　クリックした要素に、クラスactiveが存在したら
    if ($(this).hasClass("active")) {
      // クラスdrawer_bgを500ミリ秒かけてフェードインさせる
      $(".drawer_bg").fadeIn(500);
      // それ以外の場合
    } else {
      // クラスdrawer_bgを500ミリ秒かけてフェードアウトさせる
      $(".drawer_bg").fadeOut(500);
    }
  });
});

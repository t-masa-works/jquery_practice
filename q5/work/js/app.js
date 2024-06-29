$(function () {
  // クラスdropdwnのli要素にマウスをホバーした時
  $(".dropdwn li").on("mouseover", function () {
    // その子要素であるulをスライドダウンさせ表示させる
    $(this).children("ul").slideDown(400);

    // クラスdropdwnのli要素からマウスを外した時
    $(".dropdwn li").on("mouseleave", function () {
      // その子要素であるul要素をスライドダウンさせ非表示にする
      $(this).children("ul").slideUp(400);
    });
  });
});

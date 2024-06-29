$(function () {
  // クラスselect-boxの項目を変更した時
  $(".select-box").on("change", function () {
    // 変数selectにその値を格納する
    let select = $(this).val();
    // クラスfood-listのli要素をインデックス分処理をループさせる
    $(".food-list li").each(function() {
      // もしその要素のcategory-typeとvalueが一緒なら
      if($(this).data("category-type") === select) {
        // その要素を表示させる
        $(this).show();
        // もし、変数selectの値がallだったら、
      } else if(select === "all") {
        // listを全て表示させる
        $(".food-list li").show();
        // それ以外だったら
      } else {
        // その要素を非表示にさせる
        $(this).hide();
      }
    });
  });
});

$(function () {
  // クラスnavのクラスli要素をクリックした時、
  $(".nav li").on("click", function () {
    // 変数targetに、クリックした要素のインデックス番号を格納する
    let target = $(this).index();
    // クラスdescriptionのクラスli要素に、クラスis-hiddenを付与
    $(".description li").addClass("is-hidden");
    // クラスdescriptionのクリックしたインデックス番号と同じ番号のli要素にis-hiddenを付与する
    $(".description li").eq(target).removeClass("is-hidden");
  });
});

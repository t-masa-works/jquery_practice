$(function () {
  // ページが読み込まれた時に、id=q1のcolorをgreenに変更する
  $("#q1").css("color", "green");

  // id=q2をクリックしたときに
  $("#q2").on("click", function () {
    // クリックした要素のbackgroundをpinkに変更する
    $(this).css("background", "pink");
  });

  // id=q3をクリックしたときに、
  $("#q3").on("click", function () {
    // クリックした要素を3000ミリ秒かけてフェードアウトする
    $(this).fadeOut(3000);
  });

  // id=q4をクリックしたときに、
  $("#q4").on("click", function () {
    // クリックした要素に、largeクラスを付与する
    $(this).addClass("large");
  });

  // id=q5をクリックしたときに
  $("#q5").on("click", function () {
    // 要素の前に（）内を追加する
    $(this).before("DOMの前");
    // 要素の先頭に（）内を追加する
    $(this).prepend("DOMの中の前");
    // 要素の最後に（）内を追加する
    $(this).append("DOMの中の後");
    // 要素の後に（）内を追加する
    $(this).after("DOMの後");
  });

  // id=q6をクリックしたときに
  $("#q6").on("click", function () {
    // クリックした要素に下記スタイルを追加する
    $(this).css({
      "margin-top": "100px",
      "margin-left": "100px",
      transition: "2s",
    });
  });

  // id=q7をクリックしたときに
  $("#q7").on("click", function () {
    // クリックした要素の情報をコンソールに表示する
    console.log(this);
  });

  // id=q8にマウスをホバーしたときに
  $("#q8").on("mouseenter", function () {
    // .largeを付与する
    $(this).addClass("large");
  }),
  // id=q8からマウスホバーを外した時に、
    $("#q8").on("mouseleave", function () {
      // .largeを削除する
      $(this).removeClass("large");
    });

    // id=q9のli要素をクリックした時に、
  $("#q9 li").on("click", function() {
    // 変数targetに、クリックした要素のインデックスを格納する
    let target = $(this).index();
    // 変数targetをアラートで表示する
    alert(target);
  });

    // id=q10のli要素をクリックした時に、
  $("#q10 li").on("click", function() {
    // 変数targetにクリックした要素のインデックスを格納する
    let target = $(this).index();

    // id=q11のli要素インデックス番号=targetのフォントサイズを30pxに変更する
    $("#q11 li").eq(target).css("font-size", "30px");
  })
});

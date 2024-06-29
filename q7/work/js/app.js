$(function () {
  // クラスbtn_submitをクリックした時
  $(".btn__submit").on("click", function () {
    // コンソールに　名字　と表示する
    console.log("名字");
    // コンソールに、id=family__nameに入力された値を表示する
    console.log($("#family__name").val());
    // コンソールに　名前　と表示する
    console.log("名前");
    // コンソールにid=given__nameに入力された値を表示する
    console.log($("#given__name").val());
    // コンソールに 生年月日　と表示する
    console.log("生年月日");
    // コンソールに、クラスyearの値＋年クラスmonthの値＋月,クラスdayの値＋日と結合して表示する
    console.log(
      $(".year").val() +
        "年" +
        $(".month").val() +
        "月" +
        $(".day").val() +
        "日"
    );
    // コンソールに 性別　と表示する
    console.log("性別");
    // コンソールに、input[name=gender]のチェックされた値を表示する
    console.log($("input[name=gender]:checked").val());
    // コンソールに　職業　と表示する
    console.log("職業");
    // コンソールに、[name=work]の選択された値を表示する
    console.log($("[name=work]").val());
    // コンソールに　アカウント名　と表示する
    console.log("アカウント名");
    // コンソールに、id=account__nameに入力された値を表示する
    console.log($("#account__name").val());
    // コンソールに　メールアドレス　と表示する
    console.log("メールアドレス");
    // コンソールに、id=emailに入力された値を表示する
    console.log($("#email").val());
    // コンソールに　パスワード　と表示する
    console.log("パスワード");
    // コンソールにid=passwordに入力された値を表示する
    console.log($("#password").val());
    // コンソールに　確認用パスワード　と表示する
    console.log("確認用パスワード");
    // コンソールに、id=duplication__passwordに入力された値を表示する
    console.log($("#duplication__password").val());
    // コンソールに、　住所　と表示する
    console.log("住所");
    // コンソールに、id=addressに入力された値を表示する
    console.log($("#address").val());
    // コンソールに　電話番号　と表示する
    console.log("電話番号");
    // コンソールに、id=telに入力された値を表示する
    console.log($("#tel").val());
    // コンソールに、　購読情報　と表示する
    console.log("購読情報");
    // input[name=subscription]のチェックされた項目分ループさせる
    $("input[name=subscription]:checked").each(function () {
      // そのチェックされた項目の値を表示する
      console.log($(this).val());
    });
  });
});

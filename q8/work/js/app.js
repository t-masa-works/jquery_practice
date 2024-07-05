// API
function searchBook(searchWord, pageCount) {
  // 変数settingsに、APIの設定情報を格納
  const settings = {
    // 実行するURL。エンドポイントを設定
    url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    // サーバーに送るメソッド　HTTPリクエストGETで情報を取り出す
    method: "GET",
  };
  // Ajaxの実行
  $.ajax(settings)
    // 通信成功した時の処理
    .done(function (response) {
      // 変数resultに、引数responseとして通信した結果を受け取り、格納
      const result = response["@graph"];
      // displayResult関数を呼び出す
      displayResult(result);
    })
    // 通信に失敗した時の処理
    .fail(function (err) {
      // displayError関数を呼び出す
      displayError(err);
    });
}

// 検索結果を表示する処理displayResultを定義
function displayResult(result) {
  // 変数resultListに、クラスlistsの要素を格納
  const resultList = $(".lists");
  console.log(result);
  // 変数resultに格納された情報を、１つずつ引数dataとして受け取り、情報の数だけ繰り返し処理を行う
  $.each(result, function (index, data) {
    console.log(data);
    // data.itemsが存在し、かつdata.items.lengthが0より大きい場合下記処理を実行
    if (data.items && data.items.length > 0) {
      // 変数data.itemsに格納された情報を、１つずつ引数itemとして受け取り、情報の数だけ繰り返す処理を行う
      $.each(data.items, function (itemindex, item) {
        // 変数titleに、item["title"]が存在するならば、item["title"]の情報を格納し、存在しないならば、テキストを代入
        const title = item["title"] ? item["title"] : "タイトル不明";
        // creatorに、item["dc:creator"]が存在するならば、item["dc:creator"]をの情報を格納し、存在しないならば、テキストを代入
        const creator = item["dc:creator"] ? item["dc:creator"] : "著者不明";
        // publisherに、item["dc:publisher"]が存在するならば、item["dc:publisher"]をの情報を格納し、存在しないならば、テキストを代入
        const publisher = item["dc:publisher"] ? item["dc:publisher"] : "出版社不明";
        // itemLinkに、item.linkが存在するならば、item.link["@id"]の情報を格納し、存在しないならば、#を代入
        const itemLink = item.link ? item.link["@id"] : "#";
        // 変数searchResultに、HTMLと、変数に取得した情報を代入
        const searchResult =
          `<li class="lists-item">
            <div class="list-inner">
              <p>タイトル: ${title}</p>
              <p>作者: ${creator}</p>
              <p>出版社: ${publisher}</p>
              <a href="${itemLink}" target="_blank">書籍情報</a>
            </div>
          </li>`;
        // 変数resultListに格納している要素の最後に、searchResultに代入した要素を挿入
        resultList.append(searchResult);
      });
      // 変数data.itemsが存在しない、またはdata.items.lengthが0より小さい場合
    } else {
      // クラスmessage要素を削除　※同じ内容がなん度も挿入されないようにするため
      $(".message").remove();
      // 変数resultListに格納している要素の最後に、HTMLを挿入
      resultList.append(
        `<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>`
      );
    }
  });
}

// エラーを表示する処理displayErrorを定義
function displayError(err) {
  // 変数resultListに、クラスlistsの要素を格納
  const resultList = $(".lists");
  // 変数resultListの要素の中身を空にする
  resultList.empty();
  // 変数resultListに格納している要素の最後にHTMLを挿入する
  resultList.append(`<div class="message">エラーが発生しました</div>`);
  // コンソールにエラーの内容を表示
  console.error(err);
}

// 変数prevWordに、空の文字列を定義
let prevWord = "";
$(function () {
  // クラスsearch-btnをクリックした時の処理を定義
  $(".search-btn").on("click", function () {
    // 変数searchWordに、id=search-inputの値を格納する
    const searchWord = $("#search-input").val();
    // 変数resultListに、クラスlistsの要素を格納
    const resultList = $(".lists");
    // 変数searchWordの文字列の長さが、1以上だった場合の処理
    if (searchWord.length < 1) {
       // 変数resultListの要素の中身を空にする
      resultList.empty();
      // 変数resultListに格納している要素の最後にHTMLを挿入する
      resultList.append(
        `<div class="message">
          検索キーワードが有効ではありません<br>1文字以上で検索してください。
        </div>`
      );
      // searchWordとprevWordが同じだった場合
    } else if (searchWord === prevWord) {
      // pageCountを＋１する
      pageCount += 1;
      // searchBook関数を呼び出す
      searchBook(searchWord, pageCount);
    } else {
      // pageCountを１にする
      pageCount = 1;
      // 変数prevWordに変数searchWordの値を代入する
      prevWord = searchWord;
      // 変数resultListの要素の中身を空にする
      resultList.empty();
      // searchBook関数を呼び出す
      searchBook(searchWord, pageCount);
    }
  });

    // クラスreset-btnをクリックしたときの処理を定義
  $(".reset-btn").on("click", function () {
    // 変数resultListに、クラスlistsの要素を格納
    const resultList = $(".lists");
    // 変数resultListの要素の中身を空にする
    resultList.empty();
    // id=search-inputの値を空にする
    $("#search-input").val("");
  });
});

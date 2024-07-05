// API
function searchBook(searchWord, pageCount) {
  // 変数settingsに、APIの設定情報を格納
  const settings = {
    // 実行するURL。エンドポイントを設定
    url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    // サーバーに送るメソッド　HTTPリクエスト　GETは情報を取り出す
    method: "GET",
  };
  // Ajaxの実行
  $.ajax(settings)
    // 通信成功した時の処理
    .done(function (response) {
      // 変数resultに、引数responseとして通信した結果を受け取り、格納する
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

// 検索結果を表示する処理
function displayResult(result) {
  const resultList = $(".lists");
  console.log(result);

  $.each(result, function (index, data) {
    console.log(data);
    if (data.items && data.items.length > 0) {
      $.each(data.items, function (itemindex, item) {
        const title = item["title"] ? item["title"] : "タイトル不明";
        const creator = item["dc:creator"] ? item["dc:creator"] : "著者不明";
        const publisher = item["dc:publisher"] ? item["dc:publisher"] : "出版社不明";
        const itemLink = item.link ? item.link["@id"] : "#";

        const searchResult =
          `<li class="lists-item">
            <div class="list-inner">
              <p>タイトル: ${title}</p>
              <p>作者: ${creator}</p>
              <p>出版社: ${publisher}</p>
              <a href="${itemLink}" target="_blank">書籍情報</a>
            </div>
          </li>`;
        resultList.append(searchResult);
      });
    } else {
      $(".message").remove();
      resultList.append(
        `<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>`
      );
    }
  });
}

// エラーを表示する関数
function displayError(err) {
  const resultList = $(".lists");
  resultList.empty(); // 前の結果をクリア
  resultList.append(`<div class="message">エラーが発生しました</div>`);
  console.error(err);
}

let prevWord = "";
$(function () {
  $(".search-btn").on("click", function () {
    const searchWord = $("#search-input").val();
    const resultList = $(".lists");
    if (searchWord.length < 1) {
      resultList.empty();
      resultList.append(
        `<div class="message">
          検索キーワードが有効ではありません<br>1文字以上で検索してください。
        </div>`
      );
    } else if (searchWord === prevWord) {
      pageCount += 1;
      searchBook(searchWord, pageCount);
    } else {
      pageCount = 1;
      prevWord = searchWord;
      resultList.empty();
      searchBook(searchWord, pageCount);
    }
  });

  $(".reset-btn").on("click", function () {
    const resultList = $(".lists");
    resultList.empty();
    $("#search-input").val("");
  });
});

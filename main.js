"use strict";

console.log("main.js が読み込まれました!");

function addItem() {
  console.log("addItem 実行!");

  // アイテム行を追加するDivを取得する
  const itemInput = document.getElementById("itemInputs");

  // 挿入するDivを作成する
  const newItemDiv = document.createElement("div");

  // 挿入するInputを作成し、type・name をそれぞれ指定する
  const newItemInput = document.createElement("input");
  newItemInput.type = "text";
  newItemInput.name = "item";

  // 追加したInputを削除するためのボタンを作成し、
  // textContent・typeを指定する
  // また addEventListener でクリックイベントを追加する
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.type = "button";
  deleteButton.addEventListener("click", function () {
    deleteItem(this);
  });

  // 挿入するDivの中に Input と Button を追加
  newItemDiv.appendChild(newItemInput);
  newItemDiv.appendChild(deleteButton);

  // 対象のDivに作成したDivを追加
  itemInput.appendChild(newItemDiv);
}

function deleteItem(button) {
  console.log("deleteItem 実行!");

  // 押下されたボタンからInputとButtonを含む１つ上の親NodeであるDivを削除
  button.parentElement.remove();
}

function saveItem() {
  console.log("saveItem 実行!");

  // 日付を取得し、未入力の場合はアラートを出力する
  const inputDateValue = document.getElementById("date").value;
  if (!inputDateValue) {
    alert("日付を入力してください");
    // 未入力の場合は登録処理をしないのでここで関数を終了する
    return;
  }
  console.log("日付：", inputDateValue);

  // 入力されたアイテムのリストを取得し、空欄データを除いた登録用の配列を作成する
  const inputItemValues = document.querySelectorAll("#itemInputs input[name='item']");
  const items = Array.from(inputItemValues)
    .map((input) => input.value.trim())
    .filter((item) => item !== "");

  // アイテムが１件も無いん場合はアラートを出力する
  if (!items.length) {
    alert("アイテムを１件以上入力してください");
    // 未入力の場合は登録処理をしないのでここで関数を終了する
    return;
  }
  console.log("買い物リスト：", items);

  // データは、key を shopList、value に JSON文字列 を LocalStorage に格納する
  // (JSON文字列とは "日付"：[アイテムの配列] のJSONデータをコンマで繋いだ文字列）

  // アイテムを追加しやすいように LocalStorage のデータはパースしてオブジェクトに変換しておく
  const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || {};

  // 日付をキーにアイテムリストをバリューにして既存データに追加する
  shoppingList[inputDateValue] = items;

  // 登録時はJSONデータを文字列に変換する
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

  //登録後は完了メッセージを表示してページリロードを行う
  alert("データを登録しました");
  location.reload();
}

function loadItems() {
  console.log("loadItems 実行!");

  // LocalStorage からデータを取得する
  const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || {};

  // 買い物リストの表示領域
  const outputDiv = document.getElementById("output");

  // 取得したデータを forEach でループ処理をして表示領域に日付ごとの要素を追加していく
  Object.keys(shoppingList).forEach((date) => {
    // date を指定して買い物リストを格納
    const items = shoppingList[date];

    // 大外の枠（カード）
    const cardDiv = document.createElement("div");

    // 日付を表示するタイトル枠
    const headerDiv = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = "日付：" + date;

    // タイトル枠にタイトルを挿入
    headerDiv.appendChild(title);
    // カード内にタイトル枠を挿入
    cardDiv.appendChild(headerDiv);

    // 買い物リスト格納する枠
    const bodyDiv = document.createElement("div");
    // 買い物リストを ul/li を用いてリスト形式で格納
    const ul = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    bodyDiv.appendChild(ul);

    // 買い物リストを大外の枠内に格納
    cardDiv.appendChild(bodyDiv);

    // 買い物リストの表示領域に作成したカードを挿入
    outputDiv.appendChild(cardDiv);
  });
}

// 初期表示時に保存されたデータを表示
loadItems();


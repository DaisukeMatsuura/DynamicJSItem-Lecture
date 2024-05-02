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
  console.log("買い物リスト：",items)
}

function loadItems() {
  console.log("loadItems 実行!");

  // ここに保存したデータを読み込む処理を書く
}

// 初期表示時に保存されたデータを表示
loadItems();


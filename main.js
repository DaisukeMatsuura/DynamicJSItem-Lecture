"use strict";

console.log("main.js が読み込まれました!");

function addItem() {
  console.log("addItem 実行!");
  // ここに追加ボタンを押した時の処理を書く
}

function deleteItem() {
  console.log("deleteItem 実行!");

  // ここに削除ボタンを押した時の処理を書く
}

function saveItem() {
  console.log("saveItem 実行!");

  // ここに保存ボタンを押した時の処理を書く
}

function loadItems() {
  console.log("loadItems 実行!");

  // ここに保存したデータを読み込む処理を書く
}

// 初期表示時に保存されたデータを表示
loadItems();


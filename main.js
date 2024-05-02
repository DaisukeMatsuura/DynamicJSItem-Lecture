"use strict";

console.log("main.js が読み込まれました!");

function addItem() {
  console.log("addItem 実行!");
  // ここに追加ボタンを押した時の処理を書く
  const itemInput = document.getElementById("itemInputs");

  const newItemDiv = document.createElement("div");

  const newItemInput = document.createElement("input");
  newItemInput.type = "text";
  newItemInput.name = "item";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.type = "button";
  deleteButton.addEventListener("click", function () {
    deleteItem(this);
  });

  newItemDiv.appendChild(newItemInput);
  newItemDiv.appendChild(deleteButton);

  itemInput.appendChild(newItemDiv);
}

function deleteItem(button) {
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


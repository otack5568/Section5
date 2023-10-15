import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcompleteText(inputText);
  
};

//未完了リストに追加
const createImcompleteText = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //取得した要素を未完了から削除→完了に追加
    const addTarget = completeButton.parentElement;
    const text = addTarget.firstElementChild.innerText;
    
    //完了リストに追加
    createCompleteText(text);
    //未完了リストから削除
    deleteFromImcompleteList(addTarget);

  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromImcompleteList(deleteTarget);
  });

  //divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストにｄｉｖを追加する
  const ul = document.getElementById("imcomplete-list");
  ul.appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

//完了リストに追加
const createCompleteText = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //戻すボタン生成
  const restoreButton = document.createElement("button");
  restoreButton.innerText = "戻す";
  restoreButton.addEventListener("click", () => {
    //取得した要素を未完了から削除→完了に追加
    const target = restoreButton.parentElement;
    const text = target.firstElementChild.innerText;
    
    //未完了リストに追加
    createImcompleteText(text);
    //完了リストから削除
    document.getElementById("complete-list").removeChild(target);
  });

  //divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(restoreButton);

  //完了リストにｄｉｖを追加する
  const ul = document.getElementById("complete-list");
  ul.appendChild(div);
};



document.getElementById("add-button").addEventListener("click", () => onClickAdd() );
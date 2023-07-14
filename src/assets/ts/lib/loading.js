export default (function () {
  // jsが使えるか
  document.documentElement.classList.add("is-useJs");

  // 読み込み完了時
  window.onload = () => {
    document.documentElement.classList.add("is-loaded");
  };
})();

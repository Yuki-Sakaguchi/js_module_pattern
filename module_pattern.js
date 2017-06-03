/*
  モジュールパターン

  オブジェクトパターンに似ているパターン。
  プライベートな変数や関数が作れるオブジェクト。
  これでインスタンスを作るとかではない。

  ただのクロージャだけど、一応プライベートなメソッドができる。
  関数内でいろいろ処理を書いて、パブリックにしたいものだけ
  returnする
*/

var Module = (function() {

  // private歯こうやって宣言する
  var _privateVariable = "private";
  function _privateMethod() { console.log(_privateMethod) }

  // publicはこうやって返す
  return {
    publicVariable: "public",
    publicMethod: function { console.log(publicVariable) }
  }
})();

Module.publicMethod(); //-> publicMethod
Module.privateMethod(); //-> Error（宣言されていないため）

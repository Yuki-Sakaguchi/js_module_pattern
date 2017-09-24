/*
  モジュールパターン

  オブジェクトパターンに似ているパターン。
  プライベートな変数や関数が作れるオブジェクト。
  これでインスタンスを作るとかではない。

  ただのクロージャだけど、一応プライベートなメソッドができる。
  関数内でいろいろ処理を書いて、パブリックにしたいものだけ
  returnする

  ちなみにプライベートの変数、関数には「_」をつける慣例があったりなかったりする。
  個人的に結構好きなのでプライベートにする関数には「_」をつけてある
*/

var Module = (function() {

  // privateはこうやって宣言する
  var _privateVariable = "private";

  function _privateMethod() {
    console.log(_privateMethod);
  }

  // publicはこうやって返す
  return {
    publicVariable: "public",

    publicMethod: function {
      console.log(publicVariable);
    }
  }
})();

Module.publicMethod(); //-> 'public'
Module.privateMethod(); //-> Error（宣言されていないため）

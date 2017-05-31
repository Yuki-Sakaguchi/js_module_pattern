/*
  モジュールパターン

  オブジェクトパターンに似ているパターン。
  プライベートな変数や関数が作れるオブジェクト。
  これでインスタンスを作るとかではない。

  ただのクロージャだけど、一応プライベートなメソッドができる。
  関数内でいろいろ処理を書いて、パブリックにしたいものだけ
  returnする

  プライベートなメソッドへのセッターゲッターを用意したりもできる
*/

var Module = (function() {

  var version = '1.0.0';

  function _init() {
    // initiarize
  }

  function _call() {
    console.log(version);
  }

  // セッター
  function _set(value) {
    version = value;
  }

  // ゲッター
  function _get() {
    return version;
  }

  // プライベートメソッドを呼んだりもする
  _init();

  return {
    options: _options,
    get: _get,
    set: _set,
    call: _call
  }
})();

Module.call(); //-> '1.0.0'
Module.set('1.0.1');
Module.call(); //-> '1.0.1'

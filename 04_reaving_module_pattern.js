/*
  モジュールパターン（リビーリングモジュールパターン）

  モジュールパターンの書き方が違うやつ。
  全て関数内スコープに宣言して、パブリックにしたいものだけ最後にリターンする

  内部に宣言した変数、関数名には（_）をつけることもある。
*/

var Module = (function() {

  var _privateVariable = "private";
  var _publicVariable  = "public";

  function _privateMethod() {
    console.log(_privateMethod);
  }

  function _publicMethod() {
    console.log(_publicVariable);
  }

  return {
    publicVariable: _publicVariable,
    publicMethod: _publicMethod
  }
})();

Module.publicMethod(); //-> 'public'
Module.privateMethod(); //-> Error（宣言されていないため）

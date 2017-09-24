/*
  ネームスペースパターン（名前がこれでいいかは知らない）

  スコープを小さくするためにグローバル変数を受け取り、
  関数内でそれにあれこれする。
*/

;(function(ns) {

  // モジュールを作成
  var module = function() {};

  module._add = function() {
    console.log('add');
  };

  module._remove = function() {
    console.log('remove');
  };

  module.options = {
    color: 'red',
    size : 100,
  };

  // ns（window）にモジュールを追加
  ns.module = module;

})(window);

/*
  リピーリングプロトタイプパターン

  モジュールパターンだとインスタンスを複数生成するのに効率が悪い
  作る度に同じメソッドを違うメモリに保存して作られるのため。

  なので、プロトタイプ継承をつかったモジュールパターンで
  無駄のないインスタンス生成をする。

  thisの使い回しをしないといけないので、
  書き方がややこしい。

  インスタンスを何千、何万も作るわけではない場合や
  そこまでメモリを気にしなくても良い場合には
  これを使うには面倒臭いと思う。
*/

// まずはコンストラクタを宣言
var Module = function(test) {
  this.test = test;
}

// そのコンストラクタのプロトタイプを修正
Module.prototype = functioin() {
  function _publicMethod() {
    // ここでのthisはメソッド呼び出し元のインスタンス
    // それを渡ささないと、この関数オブジェクトのthisを参照しちゃう
    _privateMethod(this);
  }

  // thisと書いて本当はインスタンスを参照したいが、
  // 関数の中でthisと書くと呼び出し元のthis（関数）を参照してしまう。
  // なので、関数から関数を呼ぶ場合はthisを変数に入れて持ち回らせる
  function _privateMethod(thisObj) {
    console.log(thisObj.test);
  }

  return {
    publicMethod: _publicMethod
  }
}

var test1 = new Module("aaa");
test1.publicMethod(); //-> "aaa"

var test2 = new Module("bbb");
test2.publicMethod(); //-> "bbb"

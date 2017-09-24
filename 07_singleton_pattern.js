/*
  シングルトンパターン

  これはプログラミグでよく見るデザインパターン
  インスタンス生成用のオブジェクトを作り、
  それを利用し作ったインスタンスは全て同じインスタンスを指す。

  普通のクラスでインスタンスを作ると、それぞれ違うオブジェクトになるが、
  シングルトンパターンで作ったインスタンスは全て同じインスタンスを参照している

  なので、全てのインスタンスで同じものを参照したい時にこれを使う。

  例えば、全てに共通する設定情報保存オブジェクトをこれで作れば、
  このオブジェクトを使って生成したインスタンスから取得する設定情報が
  保証できる。（どこから参照しても同じだということ）
  そうするためには変数をいじれなくし、ゲッターだけ用意することになる。
*/

var singleton = (function() {

  // シングルトンとして参照されるインスタンス
  var instance;

  // instance(シングルトン)のオブジェクト生成関数
  function init() {
    var _privateVariable,
        _publicVariable;

    function _privateMethod() {
      console.log(_privateVariable);
    }

    function _publicMethod() {
      console.log(_publicVariable);
    }

    return {
      publicVariable: _publicVariable,
      publicMethod: _publicMethod
    }
  }

  // instanceが存在すればそれを返し、
  // なければinit()を実行してinstanceに参照オブジェクト代入しそれを返す
  function getInstance() {
    if (!instance) {
      instance = init();
    }
    return instance;
  }

  // 1度目の場合はinit()が動き、2度目以降は
  // instanseをそのまま返すメソッドを返すようにする
  return getInstance;
})();


var object1 = singleton.getInstance();
var object2 = singleton.getInstance();

if (object1 === object2) {
  console.log('true');
} else {
  console.log('false');
}

//-> true

/*
  プロトタイプパターン

  メリットはインスタンスを複製する際に無駄がない。
  オブジェクトパターンの場合はオブジェクトごとに同じメソッドが生成され、
  メモリの無駄になってしまうが、プロトタイプパターンの場合、
  prototypeに一つメソッドが作られ、それを各インスタンスが参照して使う。
  なので、同じメソッドは一つしか定義されない。

  プライベートメソッドは作れない
*/

var Animal = function(type, name) {
  this.type = type || 'dog';
  this.name = name || 'phochi';
}

Animal.prototype.call = function() {
  console.log(this.name);
}


var doc = new Animal();
doc.call(); // -> 'phochi'

var cat = new Animal('cat', 'tama');
cat.call(); // -> 'tama'

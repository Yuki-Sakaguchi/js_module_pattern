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

  // ちなみに上記は引数のデフォルトを設定する書き方だが、
  // これだともし引数に「0」や「null」を明示的に渡した時にデフォルトが代入されてしまう。
  // それが嫌な場合は以下のような書き方になる

  // 0やnullを許容する書き方
  this.type = (typeof type !== 'undefined') ? type : 'dog';
  this.name = (typeof type !== 'undefined') ? name : 'phochi';

  // もしくは引数の中身ではなく「引数があれば」という書き方
  this.type = (arguments.length >= 0) ? type : 'dog';
  this.name = (arguments.length >= 1) ? name : 'phochi';

  // 0やnullを渡すことがないという状況であれば初めに書いたので良い
}

Animal.prototype.call = function() {
  console.log(this.name);
}


var doc = new Animal();
doc.call(); // -> 'phochi'

var cat = new Animal('cat', 'tama');
cat.call(); // -> 'tama'

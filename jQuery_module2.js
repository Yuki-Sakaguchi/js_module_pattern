/*
  jQueryモジュール2

  jQueryのメソッドを作る。
  jQueryのライブラリを作る時にやる書き方。

  一つのメソッド名で複数のメソッドを対応するやり方
  $('div').on('click', function() {}); とかこれ。
  
*/

(function($) {
  if (typeof $ === 'undefined') {
    console.log('jQueryがロードされていません');
    return false;
  }

  var methods = {
    init: function(options) {

      // optionsを追加
      var settings = $.extend({
        test: 'test',
      }, options);

      console.log('init')
    },
    add: function() { console.log('add') },
    delete: function() { console.log('delete') }
  }

  $.fn.TestMethod = function(method) {
    if (methods[method]) {
      // 引数に渡されたメソッド名のメソッドがあれば
      // そのメソッドを呼び出す。thisはTestMethodで引数はargumentsの第２引数以降
      // (argumentsはArrayではないけど配列っぽい構造なのでArray.prototype.sliceを借りてくる)
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'Object' || !method) {
      // 引数のメソッドがない場合で、引数がObject、または何もない場合
      // initメソッドを呼ぶ（引数なしで動く初期化メソッド）
      return methods.init.apply(this, arguments);
    } else {
      // 何かしらあった場合、エラー
      $.error('Method ' + method + ' does not exist on jQuery.TestMethod');
    }
  }
})(jQuery);


$('div').TestMethod();
//-> 'init'

$('div').TestMethod({
  test: "test"
});
//-> 'init'（引数のオブジェクトでoptionsに追加）

$('div').TestMethod('add');
//-> 'add'

$('div').TestMethod('delete');
//-> 'delete'

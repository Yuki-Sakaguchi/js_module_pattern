/*
  jQueryモジュール

  jQueryのメソッドを作る。
  jQueryのライブラリを作る時にやる書き方。
*/

(function($) {
  if (typeof $ === 'undefined') {
    console.log('jQueryがロードされていません');
    return false;
  }

  $.fn.add = function(className) {
    return this.each(function() {
      var $this = $(this);
      $this.addClass(className);
    });
  }
})(jQuery);

$('div').add('active');

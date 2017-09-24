/*
  jQueryモジュール（require）

  通常のモジュールパターンだけでなく、
  requireにも対応しているパターン

  CommonJSやBrowserなどでモジュール管理する場合にも動くし、
  普通にブラウザに読み込んでも動くパターン
*/

(function(mod) {

  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['jquery'], mod);

  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = mod(require('jquery'));

  } else {
    // Browser globals
    mod(jQuery);
  }

})(function($) {

  // プラグイン作成
  $.fn.add = function(className) {
    return this.each(function() {
      var $this = $(this);
      $this.addClass(className);
    });
  }

})(jQuery);

$('div').add('active');

/*
  モジュールパターン（require）

  通常のモジュールパターンだけでなく、
  requireにも対応しているパターン

  CommonJSなどのrequireでのモジュール管理する場合にも動くし、
  普通にブラウザに読み込んでも動くパターン
*/


(function(mod) {

  if (typeof exports === "object") {
    // browserify(commonJS)
    module.exports = mod();

  } else {
    // javascript
    window.testModule = mod();
  }

})(function() {

  // モジュールを作成
  var testModule = function() {

    var _publicVariable  = "public";
    var _privateVariable = "private";

    function _privateMethod() {
      console.log(_privateMethod);
    }

    function _publicMethod() {
      console.log(_publicVariable);
    }

    return {
      publicMethod: _publicMethod
    }
  };

  // 作ったモジュールを返す
  return testModule;
});

testModule.publicMethod(); //-> 'public'
testModule.privateMethod(); //-> Error（宣言されていないため）

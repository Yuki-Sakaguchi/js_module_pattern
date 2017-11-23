/**
 * クラス定義
 */
class Member {
  // クラス変数は用意できないので、関数で扱う
  static getSequenceId() {
    return this.sequenceId ? this.sequenceId++ : 1;
  }

  // コンストラクタ
  constructor(name) {
      this.id = this.zeroPadding(Member.getSequenceId(), 5);
      this.name = name;
  }

  getData() {
      console.log('---');
      console.log(`私のIDは [${this.id}] です。`);
      console.log(`私の名前は [${this.name}] です。`);
  }

  setId() {
      this.id = this.zeroPadding(this.createRandom(0, 99999), 5);
  }


  /**
   * ゼロ詰め
   * @param {number} target 対象の数字
   * @param {number} digit ゼロ詰めする桁数
   * @returns {string} ゼロ詰めした文字列
   */
  zeroPadding(target, digit) {
      let zero = (() => {
          let tmp = '';
          for (let i = 0; i < digit; i++) {
              tmp += '0';
          }
          return tmp;
      })();
      return (zero + target.toString()).slice(-digit);
  }

  /**
   * ランダムの値を生成
   * @param {number} min 最小値
   * @param {number} max 最大値
   * @returns {string} 最小値から最大値までのランダムの数字の文字列
   */
  createRandom(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}

// インスタンス生成
let taro = new Member('taro');
taro.getData();

// インスタンス生成
let jiro = new Member('jiro');
jiro.getData();
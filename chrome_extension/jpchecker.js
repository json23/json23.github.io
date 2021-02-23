var regexp = /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu;

var kanzi = '漢字';
console.log(regexp.test(kanzi));
  /// => false

var hiragana = 'ひらがな';
console.log(regexp.test(hiragana));
  /// => true

var katakana = 'カタカナ';
console.log(regexp.test(katakana));
  /// => false

var hankaku = 'hankaku';
console.log(regexp.test(hankaku));
  /// => false

var all = '亜あアA';
console.log(regexp.test(all));
  /// => true
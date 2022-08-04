// ==UserScript==
// @name        Phone Font replacer
// @name:zh-TW  手機網頁字型替換
// @namespace   font-replacer
// @version     1.0
// @author      Vignetter
// @description Replace fonts by websites in phone kiwi browser
// @description:zh-cn 手機kiwi瀏覽器雲端字體替換
// @include     *
// @license     MIT
// @run-at      document-start
// ==/UserScript==

var my_font = new FontFace('TsukuARdGothic', "url('https://cdn.jsdelivr.net/gh/Vignetter/My_web_font@main/font.css') format('truetype')", { style: 'normal', weight: 'normal' });

my_font.load().then(function(loaded_face) {
	document.fonts.add(loaded_face);
  console.log('font loaded!')
    // document.body.style.fontFamily = '"TsukuARdGothic", "微軟雅黑"';
}).catch(function(error) {
	// error occurred
    console.log('Something wrong!')
});

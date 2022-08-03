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
 
class Replacer {
    constructor() {
      this.css = []
    }
    add(fonts) {
        for (const font of fonts) {
            let extra = ''
            // if (font.weight) {
            //   extra += `font-weight:${font.weight};`
            // }
            this.css.push(`@font-face{font-family:"${font.name}";${extra}src:url("${font.link}") format('${font.type}')}`);
            this.css.push(`body{
                font-family: '${font.name}';
              }`);
        }
    }
    toString() {
      return this.css.join('\n')
    }
  }
   
  let replacer = new Replacer()
   
  /**** Replace rules START *****/
   
  const fonts = [
    {
        name: 'TsukuARdGothic',
        link: 'https://cdn.jsdelivr.net/gh/Vignetter/My_web_font@main/FOT-TsukuARdGothic%20Std%20D.ttf',
        type: 'ttf'
    },
  ]
  
  /**** Replace rules END *****/
   
  replacer.add(fonts)
  GM_addStyle(replacer.toString())
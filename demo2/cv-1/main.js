let html = document.querySelector('#html')
let style = document.querySelector('#style')

let n = 0
let text =  `
/* 你好，我叫吕宜虎
 * 接下来我来变个魔术
 * 首先我要准备个div
 **/
#div1 {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来我需要把方盒子变成八卦图
 * 看好了
 **/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 神秘的小球 */
#div1::before {
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let text2 = ""
function step() {
  setTimeout(()=>{
    // 换行就加br，不是就继续加字符
    if(text[n] === "\n" ) {
      text2 += "<br>"
    }else if(text[n] === " ") {
      text2 += "&nbsp"
    }
    else {
      text2 += text[n]
    }
    html.innerHTML = text2
    style.innerHTML = text.substring(0,n)
    window.scrollTo(0,99999)
    html.scrollTo(0,99999)
    if(n < text.length - 1) {
      n += 1
      step()
    }
  },10)
}
step()
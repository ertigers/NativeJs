import string from './css.js'

const player = {
  id: undefined,
  time: 100,
  ui: {
    html: document.querySelector('#html'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast':'fast',
  },
  n: 1,
  init: ()=>{
    player.ui.html.innerText = string.substr(0,player.n)
    player.ui.style.innerHTML = string.substr(0,player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: ()=>{
    for(let key in player.events) {
      if(player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: ()=>{
    player.n += 1
    if(player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.html.innerText = string.substr(0,player.n)
    player.ui.style.innerHTML = string.substr(0,player.n)
    player.ui.html.scrollTop = player.ui.html.scrollHeight
  },
  play: ()=>{
    window.clearInterval(player.id)
    player.id = setInterval(player.run,player.time)
  },
  pause: ()=>{
    window.clearInterval(player.id) 
  },
  slow: ()=>{
    player.pause()
    player.time = 200 
    player.play()
  },
  normal: ()=>{
    player.pause()
    player.time = 50
    player.play()
  },
  fast: ()=>{
    player.pause()
    player.time = 10
    player.play()
  }
}

player.init()
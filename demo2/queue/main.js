const DivScreen = document.querySelector("#screen")
const createNumber = document.querySelector("#createNumber")
const callNumber = document.querySelector("#callNumber")

const newNumber = document.querySelector("#newNumber")
const queueNumber = document.querySelector("#queueNumber")

let n = 0
let queue = []

createNumber.onclick = () =>{
  queue.push.call(queue,++n)
  newNumber.innerHTML = n
  queueNumber.innerHTML = JSON.stringify(queue)
}

callNumber.onclick = () =>{
  if(queue.length) {
    let m = queue.shift.call(queue)
    DivScreen.innerHTML = `请第${m}号顾客就餐`
    queueNumber.innerHTML = queue
  }
}
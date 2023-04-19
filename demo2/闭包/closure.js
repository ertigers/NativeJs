// 闭包：一个函数和它周围状态的引用捆绑在一起的组合
// 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。
// 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

// 1：函数作为返回值
function test() {
  const a = 1
  return function(){
    console.log("a:", a);
  }
}

const fn = test()
const a = 2
fn()

// 结果：a:1


// 2：函数作为参数
function test(fn) {
  const a = 2
  fn()
}

const a = 1
function fn() {
  console.log("a:" , a);
}

test(fn)

// 结果：a:1

// 闭包的经典案例就是防抖节流


// 防抖
const debounce = (fn,delay)=>{
     // 创建一个标记用来存放定时器的返回值
     let timeout = null
     return function() {
       // 每次当用户点击/输入的时候，把前一个定时器清除
       clearTimeout(timeout)
       // 然后创建一个新的 setTimeout，
       // 这样就能保证点击按钮后的 interval 间隔内
       // 如果用户还点击了的话，就不会执行 fn 函数
       timeout = setTimeout(() => {
         fn.call(this, arguments);
       }, delay);
     }
}
function sayDebounce() {
  // ... 有些需要防抖的工作，在这里执行
  console.log("防抖成功！");
}
// 测试
debounce(sayDebounce,1000)


// 节流
const throttle = (fn,delay)=>{
  let canRun = true  // 通过闭包保存一个标记
  return function() {
    if(!canRun) {  // 在函数开头判断标志是否为 true，不为 true 则中断函数
      return
    }
    canRun = false  // 将 canRun 设置为 false，防止执行之前再被执行
    setTimeout(() => {
      fn.call(this,arguments)  
      canRun = true  // 执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
    }, delay);

  }
}
function sayThrottle() {
  // ... 有些需要节流的工作，在这里执行
  console.log("节流成功！");
}
throttle(sayThrottle,1000)
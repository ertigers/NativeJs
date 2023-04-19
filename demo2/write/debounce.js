const debounce = (fn,delay)=>{
  let timerId = null
  return function(){
    const context = this
    const args = arguments
    if(timerId){window.clearTimeout(timerId)}  
    timerId = setTimeout(()=>{
      fn.apply(context,args)
      timerId = null
    },delay)
  }
}

// 测试案例
const debounced = debounce(()=>console.log('hi'),2000)
debounced()
debounced()
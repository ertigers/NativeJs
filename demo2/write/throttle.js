const throttle = (fn,delay)=>{
  let canUse = true
  return function() {
    const _this = this
    const args = arguments
    if(canUse){
      fn.apply(_this,args)
      canUse = false
      setTimeout(()=>{
        canUse = true
      },delay)
    }
  }
}

// 测试案例
const throttled = throttle(()=>console.log('hi'),2000)
throttled()
throttled()
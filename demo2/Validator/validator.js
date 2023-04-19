import strategies from './strategies.js';
class Validator {
  constructor() {
   this.cache = [];
  }
 
  add(dom, rule, errMsg) {
   const arr = rule.split(':');
   this.cache.push(() => {
    const strategy = arr.shift();
    arr.unshift(dom.value);
    arr.push(errMsg);
    return strategies[strategy].apply(dom, arr);
   })
  }
 
  start() {
    console.log(this.cache);
   for (let i = 0; i < this.cache.length; i++) {
    const msg = this.cache[i]();
    if (msg) return msg;
   }
  }
}

export default Validator;
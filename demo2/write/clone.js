// 最终版本完整代码在最下面 ！！！！！！！！！！

// 乞丐版本
JSON.parse(JSON.stringify())
// 方法缺陷：
// 取不到值为 undefined 的 key
// NaN 和 无穷大，无穷小转变为 null
// 取不到原型的内容
// date 对象转变为 date 字符串
// symbol类型好像也会丢失
// 循环引用报错



// 基础版本-一层拷贝
function clone(target) {
  let cloneTarget = {};
  for (const key in target) {
      cloneTarget[key] = target[key];
  }
  return cloneTarget;
};

// 再次改进-循环多层拷贝
function clone(target) {
  if (typeof target === 'object') {
      let cloneTarget = {};
      for (const key in target) {
          cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

// 再次改进-考虑到数组
function clone(target) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      for (const key in target) {
          cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

// 再次改进-循环引用
function clone(target, map = new Map()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

// 再次改进-性能优化（Map=>WeakMap,使用while，）

// 再次改进-合理判断引用类型
// 处理可以遍历的类型
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
  return Object.prototype.toString.call(target);
}

function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
function clone(target, map = new WeakMap()) {

  // 克隆原始类型
  if (!isObject(target)) {
      return target;
  }

  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
      cloneTarget = getInit(target, type);
  }

  // 防止循环引用
  if (map.get(target)) {
      return map.get(target);
  }
  map.set(target, cloneTarget);

  // 克隆set
  if (type === setTag) {
      target.forEach(value => {
          cloneTarget.add(clone(value,map));
      });
      return cloneTarget;
  }

  // 克隆map
  if (type === mapTag) {
      target.forEach((value, key) => {
          cloneTarget.set(key, clone(value,map));
      });
      return cloneTarget;
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
      if (keys) {
          key = value;
      }
      cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}

// 处理不可以继续遍历的类型
function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
      case boolTag:
      case numberTag:
      case stringTag:
      case errorTag:
      case dateTag:
          return new Ctor(targe);
      case regexpTag:
          return cloneReg(targe);
      case symbolTag:
          return cloneSymbol(targe);
      default:
          return null;
  }
}

// 克隆Symbol类型：
function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

// 克隆正则：
function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

// 克隆函数
const isFunc = typeof value == 'function'
if (isFunc || !cloneableTags[tag]) {
       return object ? value : {}
}

function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
      console.log('普通函数');
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
          console.log('匹配到函数体：', body[0]);
          if (param) {
              const paramArr = param[0].split(',');
              console.log('匹配到参数：', paramArr);
              return new Function(...paramArr, body[0]);
          } else {
              return new Function(body[0]);
          }
      } else {
          return null;
      }
  } else {
      return eval(funcString);
  }
}


// 最终版本完整代码
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        case funcTag:
            return cloneFunction(targe);
        default:
            return null;
    }
}

function clone(target, map = new WeakMap()) {

    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}

module.exports = {
    clone
};
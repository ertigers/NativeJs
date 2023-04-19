// new Promise()会立即执行

// 1.执行 async 函数，返回的都是 Promise 对象
async function test1() {
  return 1
}

async function test2() {
  return Promise.resolve(2)
}

const result1 = test1()
const result2 = test2()
console.log("result1:",result1);
console.log("result2:",result2);


// 2.Promise.then成功的情况下，对应的是await
async function test3() {
  const p3 = Promise.resolve(3)

  p3.then(data=>{
    console.log("p3data",data);
  })

  // 第一种 await 后面是个Promise对象
  const data1 = await p3
  console.log("data1",data1);

  // 第二种 await 后面是个普通的值
  const data2 = await 4  // await Promise.resolve(4),自动封装成这样
  console.log("data2",data2);

  // 第三种 await 后面是个函数
  const data3 = await test1()
  console.log("data3",data3);
}

test3()


// Promise.catch异常的情况 对应的是try ... catch
async function test4() {
  const p4 = Promise.reject(4)
  try {
    const data4 = await p4
    console.log("data4:",data4);
  } catch(e) {
    console.error("e",e);
  }
}

test4()
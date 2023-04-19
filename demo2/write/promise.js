// 手写Promise
// Promise是一个异步操作返回的对象，用来传递异步操作的消息
// 1、解决回调地狱，代码易于维护
// 2、合并多个异步请求
// 尝试实现Promise
// Promise有三种状态：Pending初始态，Fulfilled成功态，Rejected失败态

const Promise1 = (executor) => {
  let self = this;
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;

  const resolve = (value) => {
    if (self.status === "pending") {
      self.status = "resolve";
      self.value = value;
    }
  };

  const reject = (reason) => {
    if (self.status === "pending") {
      self.status = "reject";
      self.reason = reason;
    }
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
};

Promise1.prototype.then = (onFufiled, onRejected) => {
  let self = this;
  if (self.status === "resolve") {
    onFufiled(self.value);
  }
  if (self.status === "reject") {
    onRejected(self.reason);
  }
};

export { Promise1 }



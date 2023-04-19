// 不用class实现继承
function Animal(color) {
  this.color = color
}

Animal.prototype.move = function(){
  console.log('这是原型上的方法哦~move');
}

function Cat(color,name) {
  Animal.call(this,color)
  this.name = name
}

function temp(){}
temp.prototype = Animal.prototype
Cat.prototype = new temp()
Cat.prototype.constructor = Cat

Cat.prototype.say = function(){
  console.log('miaomiao~');
}

// 测试
let cat = new Cat("白色","斑鳜")
cat.say()
cat.move()
cat.color
cat.name



// 用class的方式
class Animal{
  constructor(color){
    this.color = color
  }
  move(){
    console.log("move~move~");
  }
}

class Dog extends Animal {
  constructor(color,name){
    super(color)
    this.name = name
  }
  say(){
    console.log('wangwang~wangwang~');
  }
}

// 测试
let dog = new Dog("黄色","小黄")
dog.say()
dog.move()
dog.name
dog.color

// 原型链继承
// 定义父类
function Parent(){
  this.name = "parent";
  this.say = function(){
      console.log(this.name);
  }
}
// 定义子类
function Child(){
  this.name = "child";
}
Child.prototype = new Parent(); // 将子类的原型对象指向父类的实例
Child.prototype.construce = Child; // 修复constructor使符合原型链规定
var child = new Child(); // 实例化子类
child.say(); // child // 此时子类能够访问父类的say方法，在查找name属性的时候首先在自身属性中查找成功所以不再向上查找，若子类没有name成员，则会打印parent
console.log(child instanceof Parent); // true // 判断child的构造函数Child的prototype对象是否在Parent的原型链上

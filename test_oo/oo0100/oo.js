/**
 * JavaScript面向对象
 *
 * JavaScript没有类，JavaScript可以模拟“类”。
 *
 * JavaScript定义“类”的三种方法。
 *
 * JavaScript如何得到对象
 */

/**
 * 方法一：原始模式
 * 直接定义对象
 */
var cat =  {
    name : 'xiaomao' ,
    age : 6
}
console.log(cat.name);
/**
 * 方法二：原始模式的改进
 * 两种方式都可以。
 * 构造函数会返回一个对象。
 * 这样Cat的各个类之间没有什么联系。
 */
function Cat(name , color){
    return {
        name : name,
        color: color
    }
}
var c = Cat('xiaomao','baise');
console.log(c.name);

var Dog = function (name , color) {
    return {
        name : name ,
        color : color
    }
};
var d = Dog('wangcai','shengzongse');
console.log(d.name);


/**
 * 方法三：构造函数模式
 *
 */


















function Cat () {
    this.name = 'big mao'
}

c1 = new Cat();

console.log('c1.name = ' + c1.name);

//这样岂不是所有new出来的对象属性都是一样的
c2 = new Cat();
console.log('c2.name = ' + c2.name);
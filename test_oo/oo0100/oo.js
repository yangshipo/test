/**
 * JavaScript�������
 *
 * JavaScriptû���࣬JavaScript����ģ�⡰�ࡱ��
 *
 * JavaScript���塰�ࡱ�����ַ�����
 *
 * JavaScript��εõ�����
 */

/**
 * ����һ��ԭʼģʽ
 * ֱ�Ӷ������
 */
var cat =  {
    name : 'xiaomao' ,
    age : 6
}
console.log(cat.name);
/**
 * ��������ԭʼģʽ�ĸĽ�
 * ���ַ�ʽ�����ԡ�
 * ���캯���᷵��һ������
 * ����Cat�ĸ�����֮��û��ʲô��ϵ��
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
 * �����������캯��ģʽ
 *
 */


















function Cat () {
    this.name = 'big mao'
}

c1 = new Cat();

console.log('c1.name = ' + c1.name);

//������������new�����Ķ������Զ���һ����
c2 = new Cat();
console.log('c2.name = ' + c2.name);
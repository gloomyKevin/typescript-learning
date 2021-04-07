"use strict";
var boo = true;
var num = 123;
var str = 'abc';
// str = 123
var arr1 = [1, 2, 3];
// 通过泛型接口声明
var arr2 = [1, 2, 3];
// 允许两种数据类型 → 联合类型
var arr3 = [1, 2, 3, 'a'];
// 元组 → 限制数组的元素和个数
var tuple = [0, '1'];
// 元祖的越界问题
// 允许push
tuple.push(2);
// 可以正常输出
console.log(tuple);
// 不允许访问
// 报错
// tuple[2]
// 函数
// 因为TS的类型推导功能，通常返回类型可以省略
var add = function (x, y) { return x + y; };
// 定义一个函数类型，但不具体实现
var compute;
// 实现compute
compute = function (a, b) { return a + b; };
// 错误的定义对象的方式
// let obj: object = {x: 1, y: 2}
// 此时会报错
// obj.x = 3
// 正确的定义对象的方式
// let obj: {x: number, y: number} = {x: 1, y: 2}
// 此时不会报错
// obj.x = 3
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); //false
// 声明为undefined或null，则不可被赋值为其它类型
// let un: undefined = '1' //报错
var un = undefined;
var nu = null;
// 其它变量也不能被赋值为undefined和null
// num = undefined //报错
// num = null //报错
// 官方定义，undefined和null是任何类型的子类型
// 需要在tsconfig.json中将strictNullChecks改为false
// void可以让任何表达式返回undefined
var noReturn = function () { };
// any
var x;
x = 1;
x = [];
x = function () { };
// never
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};

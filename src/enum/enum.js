"use strict";
// 数字枚举
var Role;
(function (Role) {
    Role[Role["a"] = 0] = "a";
    Role[Role["b"] = 1] = "b";
    Role[Role["c"] = 2] = "c";
    Role[Role["d"] = 3] = "d";
})(Role || (Role = {}));
console.log(Role.a);
// 转换成js
// 枚举原理：反向映射
var Role;
(function Role() {
    Role[Role["a"] = 0] = "a";
    Role[Role["b"] = 1] = "b";
    Role[Role["c"] = 2] = "c";
    Role[Role["d"] = 3] = "c";
})(Role || (Role = {}));
// 字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u6210\u529F";
    Message["Fail"] = "\u5931\u8D25";
})(Message || (Message = {}));
// 只有名称作为了key
// 字符串枚举不可以反向映射
var Message;
(function (message) {
    Message["success"] = "success";
    Message["Fail"] = "fail";
}(message || message, {}));
// 异构枚举
// 容易引起混淆，不推荐使用
// 枚举成员分类
var char;
(function (char) {
    char[char["a"] = 0] = "a";
    char[char["b"] = 0] = "b";
    char[char["c"] = 4] = "c";
    // 计算枚举成员compute
    char[char["d"] = Math.random()] = "d";
    char[char["e"] = '123'.length] = "e";
    // compute后的枚举成员一定要被赋予初始值
    char[char["f"] = 4] = "f";
})(char || (char = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
// 枚举直接被替换为常量
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

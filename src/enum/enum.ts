// 数字枚举
enum Role {
    a,
    b,
    c,
    d
}
console.log(Role.a)

// 转换成js
// 枚举原理：反向映射
var Role
(function Role() {
    Role[Role["a"] = 0] = "a"
    Role[Role["b"] = 1] = "b"
    Role[Role["c"] = 2] = "c"
    Role[Role["d"] = 3] = "c"
})(Role || (Role = {}))

// 字符串枚举
enum Message {
    Success = '成功',
    Fail = '失败'
}
// 只有名称作为了key
// 字符串枚举不可以反向映射
var Message
(function (message) {
    Message["success"] = "success"
    Message["Fail"] = "fail"
}(message || message = {}))

// 异构枚举
// 容易引起混淆，不推荐使用

// 枚举成员分类
enum char {
    a = 0,
    b = char.a,
    c = 1 + 3,
    // 计算枚举成员compute
    d = Math.random()
    e = '123'.length
    // compute后的枚举成员一定要被赋予初始值
    f = 4
}

// 用const声明的就是常量枚举
const enum Month{
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
// 枚举直接被替换为常量
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

// TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式
// 在这个例子里，我们希望 greeter函数接收一个字符串参数
function greeter(person: string) {
  return "Hello, " + person;
}



// 然后尝试把 greeter的调用改成传入一个非字符串类型数据
// 类似地，尝试删除greeter调用的所有参数。 TypeScript会告诉你使用了非期望个数的参数调用了这个函数
// 在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解
// 要注意的是尽管有错误，greeter.js文件还是被创建了。 就算你的代码里有错误，你仍然可以使用TypeScript。但在这种情况下，TypeScript会警告你代码可能不会按预期执行。
let user = [0, 1, 2];
document.body.innerHTML = greeter(user);

// let user = "Jane User";
// document.body.innerHTML = greeter(user);

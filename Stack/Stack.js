function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
//从栈中弹入
function push(element) {
    this.dataStore[this.top++] = element;
}
//从栈中弹出
function pop() {
    return this.dataStore[--this.top];
}
//返回栈顶元素
function peek() {
    return this.dataStore[this.top-1];
}
//清空栈
function clear() {
    this.top = 0;
}
//返回栈大小
function length() {
    return this.top;
}

module.exports = Stack;

// let s = new Stack();
// s.push("李四");
// s.push("王五");
// s.push("张柳");
// console.log(s.length());
// console.log(s.peek());
// console.log(s.pop());
// console.log(s.peek());
// console.log(s.length());
// s.clear()
// console.log(s.length());
// console.log(s.peek());
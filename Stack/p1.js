/**
 * 数制间的相互转换
 * 将数字n转换以b为基数的数字
 * 例如数字32转换为2进制的数字
 */
const Stack = require("./Stack");

function mulBase(num,base) {
    let s = new Stack();
    let converted = '';
    do {
        s.push(num%base);
        num = Math.floor(num /= base);
    } while (num > 0);
    while(s.length() > 0){
        converted += s.pop();
    }
    return converted;
}
console.log(mulBase(1422,8));
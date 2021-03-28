const Stack = require("./Stack");

/**
 * 判断一个字符串是否是回文
 */

function isPalindrome(word) {
    const s =new Stack();
    let rword = "";
    for(let i = 0;i < word.length;i++) {
        s.push(word[i]);
    }
    while(s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("asdfg"));
console.log(isPalindrome("racecar"));
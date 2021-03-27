/*
    创建一个列表类
    添加向列表插入元素方法（待插元素大于列表中所有元素菜执行插入）
*/

let List = require('./List');
function insertOfLarge(list,element) {
    let islarge = true;
    let data = list.dataStore;
    for (let i = 0;i < data.length;i++){
        if (element <= data[i]) {
            islarge = false;
        }
    }
    if (islarge) {
        data.push(element);
    }
    return data;
}
const list = new List();
list.append(3);
list.append(9);
list.append(4);
list.append(6);
console.log(insertOfLarge(list,10));

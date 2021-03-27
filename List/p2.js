/**
 * 增加一个列表插入元素方法
 * 只在待插元素小于列表中所有元素才执行插入操作
 */
 let List = require('./List');

function insertOfSmall(list,element) {
    let islarge = true;
    let data = list.dataStore;
    for (let i = 0;i < data.length;i++){
        if (element > data[i]) {
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
console.log(insertOfSmall(list,1));
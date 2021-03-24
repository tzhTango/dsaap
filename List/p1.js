/*
    创建一个列表类
    添加向列表插入元素方法（待插元素大于列表中所有元素菜执行插入）
*/

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [4,6,"a",2];
    this.insert = insert;
}
function insert(element) {
    let islarge = true;
    for (let i = 0;i < this.dataStore.length;i++){
        if (element <= this.dataStore[i]) {
            islarge = false;
        }
    }
    if (islarge) {
        this.dataStore.push(element);
    }
    return this.dataStore;
}
const list = new List();
console.log(list.insert("b"))

/**
 * 增加一个列表插入元素方法
 * 只在待插元素小于列表中所有元素才执行插入操作
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
        if (element > this.dataStore[i]) {
            islarge = false;
        }
    }
    if (islarge) {
        this.dataStore.push(element);
    }
    return this.dataStore;
}

const list = new List();
console.log(list.insert(1))
function List() {
    this.listSize = 0; //列表大小
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.length = length;
    this.contains = contains;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
}
//清空列表中所有元素
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
//在列表中查找元素
function find(element) {
    for(let i = 0;i<this.dataStore.length;i++){
        if(this.dataStore[i] == element) {
            return i
        }
    }
    return -1;
}
//显示列表中元素
function toString() {
    return this.dataStore;
}
//向列表中插入一个元素,使用find方法找到要插入元素位置使用数组自带splice方法添加
function insert(element, after) {
    let insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
}
//给列表添加元素，当新元素添加后listSize加1
function append(element) {
    this.dataStore.push(element);
    this.listSize++;
}
//从列表中删除元素,使用find方法找到元素位置使用数组自带splice方法删除
function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}
//列表中有多少元素
function length() {
    return this.listSize;
}
//判断给定值是否在列表中
function contains(element) {
    for(let i = 0;i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
/**
 * 迭代器方法，遍历列表
 * pos表示当前列表元素位置
 * front 移动到列表头部
 * end 移动到列表尾部
 * prev 向后移动
 * next 向前移动
 * currPos 返回当前元素位置
 * moveTo 移动指定位置
 * getElement 获取当前位置元素
 */
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize-1;
}
function prev() {
    if(this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if(this.pos <= this.listSize-1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}

module.exports = List;

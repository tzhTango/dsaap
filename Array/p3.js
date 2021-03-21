/*
    创建weeklyTemps
    使用二维数组存储每月有用数据
    显示月平均数
    具体某一周平均数
    所有周平均数
*/
function weekTemps() {
    this.dataStore = iniWeeks;
    this.add = add;
}
function iniWeeks(row,col,initial) {
    let arr = [];
    for (let i = 0;i < row; ++i) {
        let columns = [];
        for (let j = 0;j < col; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns
    }
    return arr;
}
function add () {
    
}

weekTemps.matrix(4,7,0)
console.log();
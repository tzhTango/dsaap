/*
    创建weeklyTemps
    使用二维数组存储每月有用数据
    显示月平均数
    具体某一周平均数
    所有周平均数
*/

function weekTemps() {
    this.dataStore = [
        [48,51,46,54,55,56,53],
        [56,50,66,64,53,56,53],
        [68,51,46,54,65,53,54],
        [58,55,45,64,57,54,53]];
    this.monthAvg = monthAvg;
    this.someWeekAvg = someWeekAvg;
    this.allWeekAvg = allWeekAvg;
}

function monthAvg () {
    //console.log(this.dataStore.length);
    let total = 0;
    let arr = this.dataStore;
    let length = 0;
    for (let i = 0;i < arr.length;i++){
        for (let j = 0;j < arr[i].length;j++) {
            total += arr[i][j];
            length ++;
        }
    }
    let average = total / length;
    return average.toFixed(0);
}
function someWeekAvg (week) {
    //console.log(this.dataStore.length);
    let total = 0;
    let arr = this.dataStore;
    if (arr[week]) {
       for (let i = 0;i < arr[week].length;i++) {
            total += arr[week][i];
        }
        let average = total / arr[week].length;
        return average.toFixed(0); 
    } else {
        return "周数有误"
    } 
}
function allWeekAvg () {
    //console.log(this.dataStore.length);
    let arr = this.dataStore;
    let weekarr = [];
    for (let i = 0;i < arr.length;i++){
        let total = 0;
        for (let j = 0;j < arr[i].length;j++) {
            total += arr[i][j];
        }
        let average = total / arr[i].length;
        weekarr.push(average.toFixed(0));
    }
    
    return weekarr;
}
let weekTemp = new weekTemps();

console.log(weekTemp.monthAvg());
console.log(weekTemp.someWeekAvg(0));
console.log(weekTemp.allWeekAvg());
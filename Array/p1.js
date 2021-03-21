/*
    创建一个记录学生成绩对象
    添加成绩方法
    添加显示学生平均成绩方法
*/

function studentScore() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add(score) {
    this.dataStore.push(score);
}

function average() {
    var total = 0;
    for(let i = 0;i < this.dataStore.length;i++){
        total +=this.dataStore[i]
    }
    let average =total / this.dataStore.length;
    return average.toFixed(0);
}

var scoreList = new studentScore();
scoreList.add(60);
scoreList.add(74);
scoreList.add(56);
scoreList.add(90);
scoreList.add(68);
scoreList.add(83);
scoreList.add(84);
console.log(scoreList.average());
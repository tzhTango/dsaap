/**
 * 创建Person类保存人的姓名与性别信息
 * 创建一个至少包含10个Person对象列表
 * 写一个函数显示列表中所有拥有相同性别的人
 */

 let List = require('./List');

function Person(name,sex) {
    this.name = name;
    this.sex = sex;
}
function displaySex(List,sex) {
    let sexList = [];
    for(let i=0;i<List.dataStore.length;i++){
        if (List.dataStore[i].sex == sex) {
            sexList.push(List.dataStore[i]);
        }
    }
    return sexList;
}

let personList = new List();
let person1 = new Person("张三","男");
personList.append(person1);
let person2 = new Person("李思","女");
personList.append(person2);
let person3 = new Person("王五","男");
personList.append(person3);
let person4 = new Person("张柳","男");
personList.append(person4);
let person5 = new Person("李琦","女");
personList.append(person5);
let person6 = new Person("王疤","男");
personList.append(person6);
let person7 = new Person("张玖","女");
personList.append(person7);
let person8 = new Person("李师","女");
personList.append(person8);
let person9 = new Person("王世医","女");
personList.append(person9);
let person10 = new Person("李士尔","男");
personList.append(person10);
console.log(displaySex(personList,"女"));
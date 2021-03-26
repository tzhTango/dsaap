/**
 * 当一部影片检出，将其加入一个已租影片列表
 * 每当有客户检出一部影片，加入已租影片，显示该列表内容
 * 每当客户归还一部影片，删除已租影片，同时添加现有影片列表
 */

let List = require('./List');
let fs = require("fs");

//nodejs fs模块读取文件中数据通过数组split方法转成数组
function createArr(file) {
    let movies = fs.readFileSync(file).toString().split('\n');
    for(let i = 0;i < movies.length;i++) {
        movies[i] = movies[i].trim();
    }
    return movies;
}
//定义客户对象
function Customer(name,movie) {
    this.name = name;
    this.movie = movie;
}
// 检出影片
function checkOut(name, movie, movieList,customerList,movieOutList) {
    if(movieList.contains(movie)) {
        let c = new Customer(name,movie);
        customerList.append(c);
        movieOutList.append(movie);
        movieList.remove(movie);
    } else {
        console.log(movie + "is not available.");
    }
}
//检入影片
function checkIn(movie, movieList,movieOutList) {
    if(movieOutList.contains(movie)) {
        movieOutList.remove(movie);
        movieList.append(movie);
    }
}
//展示电影列表
function displayList(list) {
    //console.log(list.listSize);
    for(list.front();list.currPos() < list.length();list.next()) {
        if(list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + "," + list.getElement()["movie"]);
        }else {
            console.log(list.getElement());
        }
    }
}

let movies = createArr('films.txt');
//实例化一个电影列表
const movieList = new List();
//实例化一个客户列表
const customerList = new List();
//实例化一个已租影片列表
const movieOutList = new List();
//将数组movies元素保存到列表中
for(let i = 0;i < movies.length;i++) {
    //console.log(movies[i]);
    movieList.append(movies[i]);
}
console.log("最佳电影：");
displayList(movieList);
let name = "王五";
let movie = "(8) The Dark Knight（《黑暗骑士》）";
checkOut(name,movie,movieList,customerList,movieOutList);
console.log("影片已检出:");
displayList(customerList);
console.log("已租影片清单：");
displayList(movieOutList);
console.log("现在电影清单:");
displayList(movieList);
console.log("影片归还：")
checkIn(movie,movieList,movieOutList);
displayList(movieList);
console.log("已租影片清单：");
displayList(movieOutList);

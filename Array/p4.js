/*
    创建一个对象
    添加一个数组存储字母
    添加一个方法将字母连在一起显示成一个单词

*/

function unionWord() {
    this.words = [];
    this.add = add;
    this.linkWord = linkWord;
}

function add(word) {
    this.words.push(word);
}

function linkWord() {
    let wordStr = "";
    for(let i=0;i < this.words.length;i++) {
        wordStr += this.words[i];
    }
    return wordStr;
}

const unionWords = new unionWord();
unionWords.add('h');
unionWords.add('e');
unionWords.add('l');
unionWords.add('l');
unionWords.add('o');
console.log(unionWords.linkWord());
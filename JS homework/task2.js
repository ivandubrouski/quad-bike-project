/*/////////////////    TASK1 ////////////////////*/

// Вы играете в скрэббл. Но считать баллы тяжело.

// Вы решаете создать небольшой скрипт для расчета наилучшего
// возможного значения.

// Функция принимает два аргумента:

// `points`: массив целых чисел, представляющий
// для каждой буквы от A до Z баллы, которые она платит.
// `words` : массив строк в верхнем регистре

// Вы должны вернуть индекс кратчайшего слова, которое дает
// наивысший балл.
// Если длина и оценка одинаковы для двух элементов, вернуть
// индекс первого.
// Сразу же сюда автотест сбрасываю чтоб ты понял как
// оно работает

// describe("Tests", () => {
//   it("test", () => {
// var points = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
// var simpleWords = ["WHO","IS","THE","BEST","OF","US"];
// var rndmWords = ["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"];
// var firstBestWord = ["JGPCWVWFW","JXHNKBJJG"];

// Test.assertEquals(getBestWord(points,simpleWords),0);
// Test.assertEquals(getBestWord(points,rndmWords),5);
// Test.assertEquals(getBestWord(points,firstBestWord),0);
//   });
// });

const points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];
const simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"];
const rndmWords = [
  "NOQ",
  "TXAY",
  "S",
  "OM",
  "ESFT",
  "CJUKQ",
  "QL",
  "QO",
  "ASTK",
  "Y",
];
const firstBestWord = ["JGPCWVWFW", "JXHNKBJJG"];

function calculating(points, words) {
  simpleWords.sort((a, b) => a.length - b.length);
}

calculating(points, simpleWords);

/*/////////////////    TASK2 ////////////////////*/

// Определить количество пар перчаток, которое вы можете составить
// из перчаток, которые есть в вашем ящике.
//
// Учитывая массив, описывающий цвет каждой перчатки, верните
// количество пар, которые вы можете составить, предполагая,
// что только перчатки одного цвета могут образовывать пары.
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

const arr = [
  "red",
  "blue",
  "red",
  "green",
  "blue",
  "green",
  "red",
  "red",
  "black",
  "black",
];

const sortedArr = arr.map((item) => item.toLowerCase()).sort();
console.log(sortedArr);

// arr.map((item, index, arr) =>{
//     let result = 0;
//     if (arr.includes(item)) {
//         result++;
//         continue;
//         return `${result} pairs`;

//     }
// });

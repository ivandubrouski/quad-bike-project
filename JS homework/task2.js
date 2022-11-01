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

// const points = [
//   1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
//   10,
// ];
// const simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"];
// const rndmWords = [
//   "NOQ",
//   "TXAY",
//   "S",
//   "OM",
//   "ESFT",
//   "CJUKQ",
//   "QL",
//   "QO",
//   "ASTK",
//   "Y",
// ];

// Object.fromEntries([[a, 1], [c, f]]) => {a: 1, b: .....}

const points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];
const words = ["IS", "WHO", "THE", "BEST", "OF", "WDGO", "US"];

function calculating(points, words) {
  const alphbet = "abcdefghijklmnopqrstuvwxyz".split(""); //['a', 'b', ...]
  const alphbetMap = Object.fromEntries(
    alphbet.map((item, index) => [item, points[index]])
  ); //{a: 1, b: 3, .....}
  // const alphbetMap = {};
  // alphbet.forEach((item, index) => {
  //   alphbetMap[item] = points[index];
  // })

  const cost = words.map((item, index) => {
    let count = 0;

    item
      .toLowerCase()
      .split("")
      .forEach((element) => {
        count += alphbetMap[element];
      });

    return {
      count: count,
      index: index,
      length: item.length,
    };
  });

  const dataOfCost = cost.sort((a, b) => b.count - a.count); // сортировка массива обектов

  return dataOfCost
    .filter((item) => item.count === dataOfCost[0].count)
    .sort((a, b) => a.length - b.length)[0].index;
}

console.log(calculating(points, words));

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

let result = {};
arr.forEach((item) => {
  if (!result[item]) {
    result[item] = 1;
  } else {
    result[item] += 1;
  }
});
let count = 0;
console.log(result);

Object.values(result).forEach((item) => {
  count += +(item / 2).toFixed();
});

// for (let value of Object.values(result)) {
//   //"red":5; //2
//   //"black":7 //3
//   console.log(value, (value / 2).toFixed() )
//  count += +((value / 2).toFixed());
// }
console.log(count);

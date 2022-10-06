// var - глобальная изменяемая (подьем/всплытие) - не юзать!
// const - локальная неизменяемая
// let - локальная изменяемая

// var a = 13;
// const b = 14;
// let c = 15;

// console.log(a);
// console.log(b);
// console.log(c);

// Типы данных: примитивные и объекты

//number
//string
//boolean
//object
//null
//NaN
//undefined
//bigInt - редкий
//submol - редкий

// const number = 131.321;
// // + - / * ** %

// const string = 'string';
// '' = ""
// `` `${number} + ${string}`;

// const boolean = true || false;

// typeof number // number
// typeof null // object

// NaN // number * string

// let d; // undefined

// const newNumb = '132';

// const currentNumber = Number(newNumb);
// const currentNumber = +newNumb;

// const newStr = 132 + ''; // '132'

// 0, '', null, undefined, NaN === false;

// 1, 'e', [], {} === true;

// const newBool = !newNumb; // false
// const newBool = !!newNumb; // true

///////////////////// lesson 5 /////////////////////////
// примитивные типы данных при копировании создают новые значения которые хранятся в отдельных ячейках памяти
// const str = "hhhd";
// const newStr = str;

// const aaa = newStr.split(''); // ['s', 't', 'r'];

// const num = 5.5555;
// // number = 5, 10;
// // float = 2.55
// num.toFixed(2);

// Math.round(num);
// Math.floor;
// Math.ceil();

// const obj = {
//   value: "gegrwegwe",
// };
// // объекты в отличие от примитивов копируются по ссылке, те newObj - это просто ссылка на obj
// const newObj = obj;

// console.log(str.toLocaleLowerCase());
// console.log(obj.value);

// const sum = 0.1 + 0.2;

// console.log(sum.toFixed(1));

// const newSum = sum + '';
// const a = +newSum;

// const array = [5, 2, 7, false, "dddd", { a: "hu" }];

// // const array = {
// //   0: 5,
// //   1: 2,
// //   2: 7,
// // }

// const obj = {
//   b: "b",
//   a: "a",
// };

// array[2];
// obj[a];

// // const num = new Number(2);
// // const array = new Array(2);

// array.push("a");
// const a = array.pop(5);

// array.shift();
// array.unshift();

// // FIFO --------------- LIFO

// const array = [5, 2, undefined, false, "dddd", { a: "hu" }];

// delete obj[a]; +++
// delete obj[2]; +++

// cosnt newArray = array.slice(0, 4);
// const a = array.splice(1, 1);

// const array2 = ['aaaa', 'dddd'];

// const b = array.concat(array2);

// array2.join(-): //=> 'aaaa-dddd'

// const a = [['ss', 3], ['ss', 3], ['ss', ['ss', ['ss', 3]]]];

// a.flat(1); //[]

// const array = [5, 2, undefined, false, "dddd", { a: "hu" }];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// array.forEach((_, index) => {
//   console.log(index);
// });

// const numberArray = [1, 16550, 5, 88, 77];

// const newNumberArray = numberArray.map((item, index, array) => {
//   return (item += 1);
// }); //[2, 6, 89, 78, 16551];

// const arrat = [
//   {
//     name: "Ivan",
//     salary: 5555,
//   },
//   {
//     name: "Roma",
//     salary: 5534534555,
//   },
//   {
//     name: "Leha",
//     salary: 34343,
//   },
// ];

// let count = 0; // 463463

// arrat.forEach((item) => {
//   count += item.salary;
// });

// const newArray = arrat.find((item) => {
//   return item.salary > 10000;
// });

// const newArray = arrat.filter((item) => {
//   return item.salary > 10000;
// });

// const newArray = arrat.findIndex((item) => {
//   return item.salary > 10000;
// }); // 1

const numberArray = [1, 16550, 5, 11, 88, 77];
const strArray = ["afwef", "s", "Awefwef", "Befw"];

// const newNumber = numberArray.sort(); //[1, 11, 16550, 5, 77, 88]
const newNumber = numberArray.sort((a, b) => a - b); //[1, 11, 16550, 5, 77, 88]

const newStr = strArray.sort(
  (a, b) => a.toLocaleLowerCase() - b.toLocaleLowerCase()
);

console.log(newNumber);
console.log(newStr);

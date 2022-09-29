// var - глобальная изменяемая (подьем/всплытие) - не юзать!
// const - локальная неизменяемая
// let - локальная изменяемая

var a = 13;
const b = 14;
let c = 15;

console.log(a);
console.log(b);
console.log(c);

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

const number = 131.321;
// + - / * ** %

const string = 'string';
'' = ""
`` `${number} + ${string}`;

const boolean = true || false;

typeof number // number
typeof null // object

NaN // number * string

let d; // undefined

const newNumb = '132';

const currentNumber = Number(newNumb);
const currentNumber = +newNumb;

const newStr = 132 + ''; // '132'

0, '', null, undefined, NaN === false;

1, 'e', [], {} === true;

const newBool = !newNumb; // false
const newBool = !!newNumb; // true
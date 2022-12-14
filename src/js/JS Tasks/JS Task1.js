// Ваша задача состоит в том, чтобы создать функцию,
// которая может принимать любое неотрицательное целое число 
// в качестве аргумента и возвращать его с цифрами в порядке убывания
// По сути, переставьте цифры, чтобы получить максимально возможное
// число.

// Примеры:
// Вход: 42145 Выход:54421
// Вход: 145263 Выход:654321
// Вход: 123456789 Выход:987654321

const digit = prompt("введите любое неотрицательное целое число");
 
function getMaxDigit(digit) {
    digit = digit + "";
    return digit.split('').sort((a,b) => b - a).join("");    
}
alert(`максимально возможное число из введеных цифр - ${getMaxDigit(digit)}`);

///////////////////////////////Task 2//////////////

// Напишите функцию, которая будет возвращать количество 
// различных буквенных символов и цифр, не зависящих от регистра,
// которые встречаются во входной строке более одного раза.
// Можно предположить, что входная строка содержит только буквы
// (как прописные, так и строчные) и числовые цифры.

// Пример
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "неделимость" -> 1 # 'i' occurs six times
// "неделимость" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const str = prompt("введите буквенные символы и цифры");

function getTwiceMatch(word) {
    if(word){
        word.toLowerCase();
    } else{
        alert("Вы ничего не ввели");
    }
    word = word.split("").sort((a,b) => a - b);
    let storage = {};
    let count = 1;
    let currItem = word[0];
    word.forEach((item,index) => {
        if(currItem === item + 1){
            count++;
            
        }
        else{
            storage[currItem] = count;
            currItem = item;
            count = 1;
        }
        console.log(storage);
    })
    console.log(storage);

   return storage;
}
alert (getTwiceMatch(str));


////////////TASK3//////////////////////

// Реализуйте Length() для подсчета количества узлов в
//  связанном списке.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3

const list1 = [1123,
            {"name":"Ivan"},
            "123123",
            undefined
            ]

const list2 = ["qweqwe",
            123,
            [654,654,"auto",[123,123,"mazda"]],
            {"name":"Ivan"},
            "123123",
            undefined
             ]

const list3 = ["qweqwe",
            123,
            [654,654,"auto",[123,123,"mazda",{"model":"iphone"}]],
            {"name":"Ivan"},
            "123123",
            undefined
             ]

let length = 0;
function Length (arrElem){
    arrElem.forEach((item) => {
        console.log(item.length)
        if (item.length !== 0) {
            length++;
            Length(item);
        }
    });

}
console.log(Length(list1));



//////////////TASK4//////////////////

// Вам дана таблица, в которой каждый ключ представляет собой строковое число,
// а каждое соответствующее значение представляет собой массив символов, например

// {
//   "1": ["A", "B", "C"],
 //   "2": ["A", "B", "D", "A"],
// }
// Создайте функцию, которая возвращает таблицу с теми же ключами,
// но каждый символ должен появляться только один раз среди массивов значений, например

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Правила
// Всякий раз, когда две клавиши имеют один и тот же символ, их следует сравнивать численно , и большая клавиша сохранит этот символ.
// Поэтому в примере выше массив под ключом "2"содержит "A"и "B", как 2 > 1.
// Если в одном и том же массиве обнаружены повторяющиеся символы, следует сохранить первое вхождение.
// Пример 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }
// Пример 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }
// Пример 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

const list={
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
    }






/////////////////// TASK 5/////////////
// Напишите функцию, которая генерирует множители для заданного числа.
// Функция принимает integer на стандартный ввод и возвращает список целых чисел
// (ObjC: массив NSNumbers, представляющий целые числа).
// Этот список содержит простые множители в числовой последовательности.

// Примеры
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]


let multipliers = [];
const numb = prompt("введите целое число");

function getMiltipliers (item){
    item.forEach(element => {
        
    });

    return 
}

getMiltipliers(multipliers);


function sum(a, b) {
  return a + b;
}
const handler = sum;

console.log(handler(12, 5));

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}

// function handler(callback){
//     // const callback = sub;
//     console.log(callback(12,5));
// }

// handler(sub)
// handler(mult)

// function forEach(array, callback){
//     for(n of array){
//         callback(n);

//     }
// }
// function handler(value){
//     const result = value **2;
//     console.log(result);
// }

//forEach(array, handler);

// const array = [1, 2, 3, 4, 5, 6, 7];
// //array.forEach(handler);
// array.forEach(value => console.log(value**2)); // вместо handler

// test(12);
// test(12, 15);
// test(12, 24, 43);
// test(12, 65, 43, 12);

// console.log('============================');
// function forEach(array, callback){
//     for(let i = 0; i < array.length; i++){
//         callback(array[i], i, array);

//     }
// }
// function map(array, callback){
//     const newArray = []
//     for(let i = 0; i < array.length; i++){
//         newArray.push(callback(array[i], i, array))

//     }
//     return newArray
// }
// function handler(value, index, array){
//     const result = value **2;
//     console.log(index, result);
// }
// const array = [1, 2, 3, 4, 5, 6, 7];
// forEach(array, handler);

// array.forEach((value, index, array) => console.log(index, value **2, array));

// console.log('============================');

// let arr = ['Hello', 'world', '!'];
// arr.forEach(n => console.log(n));
// //arr.forEach(console.log);

// console.log('============================');

// let numbers = [1, 2, -3, 4, -5, 6, -7];
// numbers.forEach(n => console.log(n >= 0 ? n : -n));

// console.log('============================');

// let world = ['one', 'bike', 'football', 'sun', 'wednesday']
// world.forEach(n => (n.length >5 ? (console.log(n)) : console.log(false)));

// console.log('============================');
// world.forEach(n => {
//     if(n.length > 5){
//         console.log(n);
//     }
// });
// console.log('============================');
// // const result = array.map(number => number **2);// мар!!! создает новый массив и выводит его в терминал
// console.log(result);

// console.log('============================');

// function map(array, callback){
//     const newArray = []
//     for(let i = 0; i < array.length; i++){
//         newArray.push(callback(array[i], i, array))

//     }
//     return newArray
// }

// const result = array.filter(number => number %2 ===0);

// console.log(result)

// const res = array.filter((n) => n >= 0); /* // filter тоже создает новый массив */
// console.log(res);
// console.log("============================");
// let newArr = array.map((n) => (n > 0 ? n : -n));
// console.log(newArr);

// const resalt_01 = (array.filter(x => x > 0))
// .map ((x => x **2));
// // const result = resalt_01.map(x => x **2);
// console.log(resalt_01)

const array = [1, -2, 3, -4, 5, 6, 7];
const result = array.filter((x) => x > 0).map((x) => x ** 2);

console.log(result);

let words = ["one", "bike", "football", "sun", "wednesday"];

const resLine = words.filter((x) => x.length > 5).map((x) => x + "!");

console.log(resLine);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

console.log(3);
console.log(3);




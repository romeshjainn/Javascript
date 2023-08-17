// sum of two number 
const sum = (a, b) => a + b;
console.log(sum(2, 4));

// multiply by 2
const multiply = a => a * 2;
console.log(multiply(10));

// 18+ true 
const eligible = (age) => (age >= 18 ? true : false);
console.log(eligible(20));

const eligible1 = (age) => age >= 18;
console.log(eligible1(10));



// /**
//  * It is known as the following
//  * - Function expressions
//  * - Variable functions
//  */

// var add = (a, b) => a + b;
// console.log(add(1,2));

// let minus = (a, b) => a - b;

// console.log(minus(10,2));


// const addV1 = function (a, b) {
//   return a + b;
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// const customFunction = (a, b) => {
//   const sum = a + b;
//   const mul = a * b;
//   return sum + mul;
// };

// console.log("addV1: ", addV1(10, 80));
// console.log("add: ", add(100, 80));
// console.log("multiply: ", multiply(10, 80));
// console.log("customFunction: ", customFunction(10, 80));

// // var add = 10;
// // add = 30;
// // function add() {
// //     console.log("hello")
// // }
// // add();
// // console.log(add);
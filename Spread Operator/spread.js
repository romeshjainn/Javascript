// spreading elements of array
let nums = [1, 2, 3, 4, 5];
console.log(...nums); // output : 1 2 3 4 5 (destructuring array)

// function arguments
function printNums(a, b, c) {
  console.log("a :", a);
  console.log("b :", b);
  console.log("c :", c);
}
let nums2 = [1, 2, 3];

printNums(...nums2);

// Multiply 2 by each element
let arr = [1, 2, 3, 4, 5];

// Using loop - old way
let multiplyV1 = [];
for (let i = 0; i < arr.length; i++) {
  multiplyV1.push(arr[i] * 2);
}
console.log(multiplyV1);

// Using map - normal function
let multiplyV2 = arr.map(function (element) {
  return element * 2;
});
console.log(multiplyV2);

// Using map - arrow function
let multiplyV3 = arr.map((item) => item * 2);
console.log(multiplyV3)



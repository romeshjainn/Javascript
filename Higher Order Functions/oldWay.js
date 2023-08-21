// functions to get area, circumfrence and radius of array elements
// old way
let arr = [1, 2, 3, 4];

function circumference(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * Math.PI * arr[i]);
  }
  return output;
}
console.log(circumference(arr));

function area(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(Math.PI * arr[i] * arr[i]);
  }
  return output;
}
console.log(area(arr));

function diameter(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * arr[i]);
  }
  return output;
}
console.log(diameter(arr));

// creates a new array
// we can perfrom operations on each element

// function to multiply each element by itself and create a new array

// old way
let arr = [1, 2, 3, 4, 5];
let arr1 = [];
for (let i = 0; i < arr.length; i++){
    arr1.push(arr[i] * arr[i]);
}
console.log(arr1);

// new way
const arr2 = arr.map((value) => value * value);
console.log(arr2);


// uppercase fist character of names
// old way
let names = ["romesh", "abc"];

for (let i = 0; i < names.length; i++) {
  let first = names[i].split(""); 
  first[0] = first[0].toUpperCase(); 
  names[i] = first.join("");
  console.log(names[i]);
}

// new way
const words = ["apple", "banana", "cherry", "date"];

const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizedWords); // Output: ["Apple", "Banana", "Cherry", "Date"]

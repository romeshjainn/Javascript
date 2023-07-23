// 1. Add Element to the End of the Array
let number = [1, 2, 3, 4];
number.push(5);
console.log(number);

// 2. Remove Last Element from the Array
number.pop();
console.log(number);

// 3. Add Element to the Starting of the Array
number.unshift(0);
console.log(number);

// 4. Remove first Element from the Array
number.shift();
console.log(number);

// 5. Creates a New Array by Extracting a Portion of an Existing Array - Without Affecting Array
const newArray = number.slice(0, 2);
console.log(newArray);
console.log(number); // It Is As It Was

// Crete

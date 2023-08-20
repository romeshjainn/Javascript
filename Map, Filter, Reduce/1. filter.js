const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];

// getting even nums from arr
// legacy way
const evenNumbers = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// using filter
const even = arr.filter((nums) => nums % 2 == 0);
console.log(even); // Output: [2, 4, 6, 8, 10]


// getting nums divible by 3 and 5
let filteredArr3 = arr.filter((item) => {
    if (item % 3 === 0 || item % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(filteredArr3);

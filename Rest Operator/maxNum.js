const max = (...nums) => {
  return Math.max(...nums); // using spread op because Math.max taked numbers instead of array
};
let arr = [1, 2, 3, 4, 5];
console.log(max(...arr)); // using spread operator to pass elements of arrays individually to ...nums
console.log(max(2, 3, 4, 5, 9)); // we can pass numbers directly too


// Example of math max 
let maxNum = Math.max(4, 5, 6, 7);
console.log(maxNum)

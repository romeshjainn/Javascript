// function which takes to arguments, one is array and anther one is number, and push the number to the array

// let arr = [1, 2, 3];
// let num = 4;

// function pushh(arr, num) {
//     arr.push(num);
//     return arr;
// }

// console.log(pushh(arr, num));

// pushing 1 to n into an array

// let arr = [];

// let n = 10;

// for (let i = 1; i <= n; i++){
//     arr.push(i);
// }
// console.log(arr);

// let names = ["romesh", "jain", "somesh", "jain"];

// for (let i = 0; i < names.length; i++){
//     names[i] = names[i].toUpperCase();
// }
// console.log(names);

// function to push even numbers to a new array
// let nums = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = [];
// function a(nums) {
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] % 2 == 0) {
//             even.push(nums[i]);
//         }
//     }
// }
// a(nums);
// console.log(even);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function merg(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
}
merg(arr1, arr2);
console.log(a);
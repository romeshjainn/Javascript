// let newArr = [];

// function addNums(...nums) {
//   for (let i = 0; i < nums.length; i++) {
//     newArr.push(nums[i] * 2);
//   }
//   return newArr;
// }

// let arr = [12, 3, 4, 5];
// console.log(addNums(...arr));
function sum(...nums) {
    return nums * 2;
}
console.log(sum(19));
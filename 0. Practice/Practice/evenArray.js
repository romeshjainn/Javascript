let nums = [1, 2, 3, 4, 5, 6, 7, 855, 756, 23, 456];

function even(nums) {
    let evenNum = [];
    for (let i = 0; i < nums.length; i++) {
        let store = nums[i];
        if (store % 2 === 0) {
            evenNum.push(store);
        }
    }
    return evenNum;
}
console.log(even(nums));
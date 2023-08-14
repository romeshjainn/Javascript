let arr = [1, 2, 3, 4, 5];
let arr2 = arr;

// Copy by reference, so the address of arr and arr2 value's is same

arr[0] = 6;
console.log(arr) // [ 6, 2, 3, 4, 5 ]
console.log(arr2) // [ 6, 2, 3, 4, 5 ]

arr2[0] = 6;
console.log(arr) // [ 6, 2, 3, 4, 5 ]
console.log(arr2) // [ 6, 2, 3, 4, 5 ]

// let a = {
//   name: "romesh",
//   b: 1,
//   nestedObject: {
//     profile: "hello",
//     num: 1,
//   },
// };

// let b = { ...a };
// b.name = "ashish";
// b.nestedObject.profile = "hello02";
// console.log(a);
// console.log(b);

let arr = [1, 2, 3, 4, 5, 6, { name: "romesh" }];
let arr2 = [...arr];
arr2[2] = "hello";
arr2[6].name = "ashish"; // Modify the name property of the object inside arr2

console.log(arr);
console.log(arr2);

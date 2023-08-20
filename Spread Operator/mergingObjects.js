let mi = {
  brand: "redmi",
  price: 7999,
};
let apple = {
  brand: "iphone",
  price: 99999,
};
// but it will update the keys and values or merge them
let mobiles = { ...mi, ...apple };
console.log(mobiles); // output : { brand: 'iphone', price: 99999 };

let num = {
  a: 1,
  b: 2,
};
let num2 = {
  b: 1,
  c: 3,
  d: 6,
};
// merged objects , objs respect last key and values so b : 2 is not b:1
let nums = { ...num, ...num2 };
console.log(nums); // output : { a: 1, b: 1, c: 3, d: 6 }

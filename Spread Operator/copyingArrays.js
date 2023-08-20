// The spread operator can be used to make a shallow copy of an array, object. 

let nums = [1, 2, 3, 4, 5, 6];
let nums2 = [...nums];
console.log(nums2);


// for nested object it doesnt work , if i change the copy it will change the original obj
let obj = {
  name: "romesh",
  number: 1,
  details: {
    mobile: "samsung",
    imei: 123,
  },
};

let obj2 = { ...obj };
console.log(obj2)
obj2.name = "somesh"
obj2.details.mobile = "iphone"
console.log(obj)
console.log(obj2)
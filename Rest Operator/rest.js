let names = [1, 2, 3, 4, 5];

// taking limitless arguments to the function
// example 1
function add(...nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= 2; 
  }
  return nums;
}
console.log(add(1,3,5,7)); // Spread the array into individual arguments
console.log(add(...names))

// example 2
function printNames(first, second,third, ...otherNames) {
    console.log("first :", first);
    console.log("second :", second);
    console.log("third :", third);
    console.log(otherNames);
}
printNames("romesh", "garima", "sankalp", "apurva", "sanskar", "nishu");
// it will create array for apurva, sanskar, nishu

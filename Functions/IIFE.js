// works only once

(() => {
    let a = 10;
    let b = 1;
    // return 10 + 1;
    console.log(10+1)
    // console.log("hello");
})();

const add = (() => {
    let a = 2;
    let b = 4;
    return a + b;   
})();

console.log(add); 

let sum = add + 2;
console.log(sum)

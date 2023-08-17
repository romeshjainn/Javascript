const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];

// Legacy way
let filteredArr1 = []
for (let element of arr) {
    if (element % 3 === 0 || element % 5 === 0) {
        filteredArr1.push(element);
    }
}
console.log(filteredArr1);

// ES6 Way
let filteredArr2 = arr.filter(
  (element) => element % 3 === 0 || element % 5 === 0
);
console.log(filteredArr2)

// Another Way 
let filteredArr3 = arr.filter((item) => {
    if (item % 3 === 0 || item % 5 === 0) {
        return true;
    }
    else {   
        return false;
    }
});
console.log(filteredArr3);


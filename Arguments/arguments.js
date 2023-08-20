// basic usage
// taking limit less inputs
// sum of elements
function sum() {
    console.log(arguments)
    // { '0': 1, '1': 2, '2': 3, '3': 4 }
    // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
let arr = [1, 2, 3, 4];
console.log(sum(...arr)); // to pass elements as arguments using spread
console.log(sum(1, 2, 3, 4, 5)); // takes numbers and creates objs of elements
// functions to get area, circumfrence and radius of array elements
// old way 
let arr = [1, 2, 3, 4];

function circumfrence(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(2 * Math.PI * arr[i]);
    }
    return output;
}
circumfrence(arr);
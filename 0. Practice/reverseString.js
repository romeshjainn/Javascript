let str = "romesh jain";

function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--){
        rev = rev + str[i];
    }
    return rev;
}
console.log(reverse(str));
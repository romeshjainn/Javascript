// taking string and converting it to array
// using if else, to check if the brackets have there partner closing bracket

function check(a) {
  let b = a.split("");
    if (b[0] === b[1] || b[2] === b[3] || b[4] === b[5]) {
        return true;
    }
    else {
        return false;
    }
  //   if (
  //     (b[0] === "(" && b[1] === ")") ||
  //     (b[0] === "[" && b[1] === "]") ||
  //     (b[0] === "{" && b[1] === "}")
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

let a = "(){}";
console.log(check(a));

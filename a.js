// taking string and converting it to array
// using if else, to check if the brackets have there partner closing bracket

function check(a) {
  let b = a.split("");
  // for (let i = 0; i < b.length; i++){
  // trying another way
  // }
  if (
    (b[0] === "(" && b[1] === ")") ||
    (b[0] === "[" && b[1] === "]") ||
    (b[0] === "{" && b[1] === "}")
  ) {
    return true;
  } else {
    return false;
  }
}

let a = "(){}";
console.log(check(a));

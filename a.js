function check(a) {
  let b = a.split("");

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

let a = "()";
console.log(check(a));

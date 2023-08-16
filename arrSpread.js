let a = [1, 2, 3, 4, 5, 6, ["romesh"]];
let b = [...a];
b[6] = "sanjeev";
console.log("a", a);
console.log("b", b);
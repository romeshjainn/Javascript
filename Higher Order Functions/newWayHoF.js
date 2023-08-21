let radius = [1, 2, 3, 4, 5];

function calculate(radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}
function area(radius) {
  return Math.PI * radius * radius;
}
function diameter(radius) {
  return 2 * radius;
}
let result = calculate(radius, circumference);
console.log(result);

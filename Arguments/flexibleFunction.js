const greeting = function (name, name2) {
  if (arguments.length < 2) {
    return "hello, not enough name";
  }
  return `${name}, ${name2}`;
};
// more flexible function can directly store the arguments into an array to perform operations we want
console.log(greeting("romesh", "jain")); // Output: "romesh, jain"
console.log(greeting("romesh")); // Output: "hello, not enough name"

function concatenate(separator) {
  return Array.from(arguments).join(separator);
}
console.log(concatenate("-", "romesh", "somesh")); // Output: "--romesh-somesh";
console.log(concatenate(" ", "Hello", "world")); // Output: "Hello world"
console.log(concatenate("", "a", "b", "c")); // Output: "abc"

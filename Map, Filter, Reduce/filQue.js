// // const products = [
// //   {
// //     name: "Smartphone",
// //     price: 499.99,
// //     category: "Electronics",
// //     description: "High-end smartphone with advanced features.",
// //   },
// //   {
// //     name: "Laptop",
// //     price: 799.0,
// //     category: "Electronics",
// //     description: "Powerful laptop for work and entertainment.",
// //   },
// //   {
// //     name: "Designer Watch",
// //     price: 299.5,
// //     category: "Fashion",
// //     description: "Elegant watch with a unique design.",
// //   },
// //   {
// //     name: "Gaming Console",
// //     price: 349.99,
// //     category: "Electronics",
// //     description: "Next-gen gaming console for immersive gameplay.",
// //   },
// //   {
// //     name: "Digital Camera",
// //     price: 599.95,
// //     category: "Electronics",
// //     description: "High-resolution camera for stunning photography.",
// //   },
// // ];

// // let filteredProducts = products.filter((product) => {
// //   return product.category === "Electronics" && product.price > 500
// //     ? true
// //     : false;
// // });

// // // Another Way
// // let filteredProducts2 = products.filter(
// //   (product) => product.category === "Electronics" && product.price > 500
// // );

// // console.log(filteredProducts2);

// // console.log(filteredProducts);
// // console.log(filteredProducts2);

// let age = 18;
// // 1 way
// function hello(age) {
//   return age >= 18;
// }
// // 2 way
// let eligibility = (age) => (age >= 18 ? true : false);

// // 3 way
// let eligibility2 = (age) => age >= 18;
// let isEligibleVoter = (age) => age > 18;
// console.log(hello(age));
// console.log(eligibility(age));
// console.log(eligibility2(age));

// console.log(isEligibleVoter(28));
let isEligibleVoter = (age) => age > 18;
console.log(isEligibleVoter(28));

// let isEligibleVoter = (age) => age > 18;
// console.log(isEligibleVoter(18));
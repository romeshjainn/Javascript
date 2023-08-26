// let obj = {
//   name: "dave",
//   country: "usa",
//   isAlien: false,
//   rank: 2,
// };
// let { name, country, isAlien, rank } = obj;
// console.log(name, country, isAlien, rank);

let obj2 = {
  player1: {
    uName: "dave",
    country: "usa",
    isAlien: false,
    rank: 2,
  },
  player2: {
    uName: "elon",
    country: "uk",
    isAlien: true,
    rank: 5,
  },
};
// let { player1.uName } = obj2; Invalid
let {
  player2: { uName, country }, player1
} = obj2;
let {
  player2: { uName: player2Name },
} = obj2;

console.log(uName, country);
console.log(player1)
console.log(player2Name);


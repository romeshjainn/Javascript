let nums = [1, 2, 3, 4, 5, 6];
// sum of all elements
// here previous is first element and current is after 

const sum = nums.reduce((previous, current) => {
    // console.log(previous)
    // console.log(current)
    return previous + current;
}, 10) // previous is initialed to 10
// it means instead of counting from 0, it will start from 10 
console.log({ sum }); // { sum: 21 }
console.log(sum); // 21

// we can even pass index and array 
const sum2 = nums.reduce((previous, current, index, array) => {
  console.log({ previous, current, index, array });
  return previous + current;
});

console.log({ sum2 });


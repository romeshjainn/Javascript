let apiData = fetch("https://fakestoreapi.com/products");

function getGreetings(name) {
  return `Hello ${name}, welcome to C10`;
}

// using normal function 
apiData.then(function (incomingData) {
    return incomingData.json();
})
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log("error", error)
})

  // all the data gathered from that api is stored in {data} array/variable
  // all the errors will get stored in the error

  // using arrow function
fetch("https://fakestoreapi.com/poducts") // printing error coz url is wrong (poducts = products)
  .then((incomingData2) => incomingData2.json())
  .then((data2) => console.log(data2))
  .catch((error) => console.log("error:", error));


  // it is going to print this first, even though we called the api first, coz it is asynchronous
  // it doen'nt block other block of code, when it is processing
  console.log("Start");
  console.log(getGreetings("Krishna"));
  console.log(getGreetings("Palak"));
  console.log(getGreetings("Anurag"));
  console.log("End");
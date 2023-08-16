const arr = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    state: "New York",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    state: "California",
    isActive: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    city: "Chicago",
    state: "Illinois",
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Brown",
    city: "Houston",
    state: "Texas",
    isActive: true,
  }
];
// Normal Functin 
let newArr = arr.map(function (element) {
    if(element.isActive == false) {
        element.isActive = "Not Available";
    }
    else {
        element.isActive = "Available"
    }
    return element;
});

// Arrow Function 
let newArr2 = arr.map((element) => {
    if (element.isActive == false) {
      element.isActive = "Not Available";
    } else {
      element.isActive = "Available";
    }
    return element;
})

console.log("arr", arr);
console.log("newArr", newArr);
console.log("newArr2", newArr2);
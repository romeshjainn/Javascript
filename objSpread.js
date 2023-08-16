// let profile = { name: "sanjeev", no: 1 };
// let profile2 = profile;
// profile2.name = "romesh";
// console.log("profile", profile);
// console.log("profile2", profile2);


let profile = { name: "sanjeev", no: 1 };

// let profile2 = { ...profile, class: "VSS", name:"nitin chugh"}
let profile2 = { class: "VSS", name: "nitin chugh", name: "sanjeev", no: 1 };

console.log("profile", profile);
console.log("profile2", profile2);


// let a = { name: "romesh", b: 1, nestedObject: { profile: "hello", num: 1, }, };

// let b = { ...a };
// b.nestedObject.profile = "sanjeev";

// console.log("a",a)
// console.log("b",b)
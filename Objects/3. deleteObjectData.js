const profile = {
    name: "Romesh Jain",
    name: "Jain Romesh",
    city: "Gwalior",
    mobile: 9516949156,
    isGraduated: true,
    favColor: ["red", "yellow"],
    laptopSpecs: {
        brand: "Lenovo",
        processor: "i3 11th Gen",
        applications: ["VS Code", "OBS Studio"]
    }
}

delete profile.name;
delete profile["favColor"];
// console.log(delete profile.city);
console.log(profile);

// Object Destructuring
// Spread Operator
// Rest Operator
// Object Assign
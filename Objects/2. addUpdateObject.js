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

// Add property and value
profile.country = "India";
profile["friend"] = "none";

// Update value
profile.city = "Surat";
console.log(profile);

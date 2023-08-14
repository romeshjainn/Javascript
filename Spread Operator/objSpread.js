let profile = { name: "romesh", lang: "JS" };

// Creating a copy of profile, so even i change profile2, it wont change profile
let profile2 = { ...profile }; 

profile2.name = "somesh"

console.log(profile) // { name: 'romesh', lang: 'JS' }
console.log(profile2) // { name: 'somesh', lang: 'JS' }
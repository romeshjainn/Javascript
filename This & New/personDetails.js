const Details = (name, address) => {
    this.name = name;
    this.address = address;

    console.log("name is", this.name)
    console.log("address is", this.address)

}

let hitesh = new Details("hitesh", "new york");
console.log(hitesh);

let ritesh = new Details("Ritesh", "usa");
console.log(ritesh);
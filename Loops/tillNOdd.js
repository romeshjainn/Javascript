let num = 10;
for (let i = 1; i <= num; i++) {
    let store = 0;
    if (i % 2 !== 0) {
        console.log("Odd numbers are", i);
    }
    store += i;

    console.log(store);
}
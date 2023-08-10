function check() {
    let arr = [...arguments];
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    // console.log(arguments);
    
}
check(12, 20);
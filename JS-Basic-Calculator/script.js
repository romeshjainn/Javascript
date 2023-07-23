document.getElementById("cal").onclick = function () {
    const numA = Number(document.getElementById("num-a").value);
    const numB = Number(document.getElementById("num-b").value);
    const op = document.getElementById("op").value;

    if (op === "+") {
        result.innerText = numA + numB;
    }
    else if (op === "*") {
        result.innerText = numA * numB;

    }
    else if (op === "-") {
        result.innerText = numA - numB;

    }
    else if (op === "/") {
        result.innerText = numA / numB;

    }
};
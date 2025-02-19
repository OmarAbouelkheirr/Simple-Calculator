
function Addition() {
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    document.getElementById("result").innerText = "The result is: " + (num1 + num2);
}

function Subtraction() {
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    document.getElementById("result").innerText = "The result is: " + (num1 - num2);
}

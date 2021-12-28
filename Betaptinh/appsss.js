let firstNumber, secondNumber, warning="";
function doOperator() {
    firstNumber = parseFloat(document.getElementById("firstNumber").value);
    secondNumber = parseFloat(document.getElementById("secondNumber").value);
    if (document.getElementById("add").checked) {
        result = firstNumber + secondNumber;
    } else if (document.getElementById("subtraction").checked) {
        result = firstNumber - secondNumber;
    } else if (document.getElementById("multi").checked) {
        result = firstNumber*secondNumber;
    } else if (document.getElementById("divide").checked) {
        result = firstNumber/secondNumber;
    } else {

    }
    document.getElementById("result").value = result;
}
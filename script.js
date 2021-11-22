function calculate(num1, num2, op) {
    if (op === 'sum') {
        return num1 + num2;
    }
    else if (op === 'sub') {
        return num1 - num2;
    }
    else if (op === 'div') {
        return num1 / num2;
    }
    else if (op === 'mul') {
        return num1 * num2;
    }
    else {
        return -123456789;
    }
}
function calculateTwoNumbers(e) {
    e.preventDefault();
    var n1 = parseInt(document.getElementById("number1").value);
    var n2 = parseInt(document.getElementById("number2").value);
    var op = document.getElementById("select").value;
    var result = calculate(n1, n2, op);
    if (result === -123456789)
        return;
    addElement();
    interval(result);
}
function addElement() {
    var element = document.getElementById('main');
    element.innerHTML = "<div class=\"warn\"><p style=\"text-align: center;\">Successfully calculated!</p></div>";
}
function printResult(result) {
    alert('Result: ' + result);
}
function redirect() {
    setInterval(function () {
        location.href = "index.html";
    }, 1000);
}
function interval(result) {
    setInterval(function () {
        printResult(result);
        redirect();
    }, 2000);
}

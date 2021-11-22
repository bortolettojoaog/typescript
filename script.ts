function sum(num1 : number, num2 : number) : number {
    return num1 + num2;
}

function sumTwoNumbers(e) {
    e.preventDefault();

    var n1 = parseInt((<HTMLInputElement>document.getElementById("number1")).value);
    var n2 = parseInt((<HTMLInputElement>document.getElementById("number2")).value);

    alert(sum(n1, n2));
}
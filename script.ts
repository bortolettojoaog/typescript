function sum(num1 : number, num2 : number) : number {
    return num1 + num2;
}

function sumTwoNumbers(e) {
    e.preventDefault();

    var n1 = parseInt((<HTMLInputElement>document.getElementById("number1")).value);
    var n2 = parseInt((<HTMLInputElement>document.getElementById("number2")).value);

    addElement();

    alert(sum(n1, n2));
}

function addElement() {
    const element: HTMLElement = document.getElementById('main') as HTMLElement;
    element.innerHTML = `<div class="warn"><p style="text-align: center;">Sum performed successfully!</p> <a style="display: block; text-decoration: none; text-align: center;" href="index.html">Home</a></div>`;
}
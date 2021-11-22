function calculate(num1 : number, num2 : number, op : string) : number {
    if (op === 'sum') {
        return num1 + num2;
    } else if (op === 'sub') {
        return num1 - num2;
    } else if (op === 'div') {
        return num1 / num2;
    } else if (op === 'mul') {
        return num1 * num2;
    } else {
        return -123456789;
    }
}

function calculateTwoNumbers(e) {
    e.preventDefault();

    var n1 = parseInt((<HTMLInputElement>document.getElementById("number1")).value);
    var n2 = parseInt((<HTMLInputElement>document.getElementById("number2")).value);
    
    var op = (<HTMLInputElement>document.getElementById("select")).value;

    var result = calculate(n1, n2, op);

    if (result === -123456789) return;

    addElement();

    interval(result);
}

function addElement() {
    const element: HTMLElement = document.getElementById('main') as HTMLElement;
    element.innerHTML = `<div class="warn"><p style="text-align: center;">Successfully calculated!</p></div>`;
}

function printResult(result : number) {
    alert('Result: ' + result);
}

function interval(result : number) {
    setInterval(() => {
        printResult(result);

        setInterval(() => {
            location.href="index.html";
        }, 1000);
    }, 2000);
}
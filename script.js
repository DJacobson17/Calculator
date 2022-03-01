function add(x,y) {
    return x + y
};

function subtract(x,y) {
    return x - y
};

function multiply(x,y) {
    return x * y
};

function divide(x,y) {
    return x / y 
};

function operate(o,x,y) {
    return (o == "+") ? add(x,y)
        : (o == "-") ? subtract(x,y)
        : (o == "*") ? multiply(x,y)
        : (o == "/") ? divide(x,y)
        : "Not an operator."
}
operatorButton = document.querySelectorAll('.buttonOperator');
numberButton = document.querySelectorAll('.buttonNumber');
decimalButton = document.getElementById('.');

numberButton.forEach(item => {
    item.addEventListener('click', event => {
        displayValue(item.id)
    })
})

decimalButton.addEventListener('click', decimalAction);

function decimalAction() {
    return (value.includes('.')) ?  alert("You already have a decimal.") : displayValue('.')
}

let value = "";
let x = 0;
let o = "";
let y = 0;
const screen = document.getElementById('display')

function displayValue(num) {
    value += num;
    screen.innerHTML = value;
}
operatorButton.forEach(item => {
    item.addEventListener('click', event1 => {
        x = value;
        o = decideOperand(item.id);
        clearValue();
        console.log(o);
        console.log(x);
    })
})

function decideOperand (operator) {
    return (operator == "add") ? "+"
        : (operator == "subtract") ? "-"
        : (operator == "multiply") ? "*"
        : "/"
}
function clearValue() {
    value = "";
}

clearButton = document.getElementById('clear');
clearButton.addEventListener('click', event2 => {
    clearValue();
    displayValue("");
    x = 0;
    y = 0;
})
equals = document.getElementById('equals');
equals.addEventListener('click', event3 => {
    y = value;
    if ((o == "/") && (y == "0")) { 
        alert("You dumb bastard! You can't divde by zero.");
    } else {let answer = operate(o,Number(x),Number(y));
        screen.innerHTML = +answer.toFixed(2);
        value = answer;
    }    
})
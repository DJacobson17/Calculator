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
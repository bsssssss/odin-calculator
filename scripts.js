const displayText = document.querySelector('.display-text');
const buttons = document.querySelectorAll('button');

let firstNumber = '';
let secondNumber = '';
let operator = '';

function initCalculator() {
    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            handleClicks(button, e);
        });
    }
    updateDisplay('Mathematics strikes back.');
}

function handleClicks(button, event) {
    if (displayText.textContent != '') {
        updateDisplay('');
    }
}

function isNumber(button) {
    return button.classList.value.includes('number');
}

function isReset(button) {
    return button.classList.value.includes('reset');
}

function isOperator(button) {
    return button.classList.value.includes('operator');
}

function updateDisplay(string) {
    displayText.textContent = string;
}

window.onload = initCalculator();

/* ---------------- Operations ---------------- */

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function mult(x, y) {
    return x * y;
}

function operate(op, x, y) {
    let result = 0;

    if (op == '+') {
        result = add(x, y);
    }
    if (op == '-') {
        result = subtract(x, y);
    }
    if (op == '/') {
        result = divide(x, y);
    }
    if (op == '*') {
        result = mult(x, y);
    }

    return result;
}

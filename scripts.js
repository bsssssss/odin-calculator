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

const displayText = document.querySelector('.display-text');
function updateDisplay(string) {
    displayText.textContent = string;
}

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    console.log('Reset !');
    updateDisplay('');
});

const numberButtons = document.querySelectorAll('.number-button');
for (let button of numberButtons) {
    button.addEventListener('click', () => {
        console.log(`${button.textContent}`);
    });
}

const operatorButtons = document.querySelectorAll('.operator-button');
for (let button of operatorButtons) {
    button.addEventListener('click', () => {
        console.log(`${button.textContent}`);
    });
}

const calculateButton = document.querySelector('.calculate-button');
calculateButton.addEventListener('click', () => {
    console.log(`Calculate !`);
});

function initCalculator() {
    updateDisplay('Mathematics strikes back.');
}
window.onload = initCalculator();

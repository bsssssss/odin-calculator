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
    x = parseFloat(x);
    y = parseFloat(y);
    if (op == '+') {
        result = add(x, y);
    }
    if (op == '-') {
        result = subtract(x, y);
    }
    if (op == '/') {
        if (y == 0) {
            updateDisplay("sorry dave, i can't do that");
            resetAll();
        } else {
            result = divide(x, y);
        }
    }
    if (op == '*') {
        result = mult(x, y);
    }
    return result;
}

let leftOperand = '';
let rightOperand = '';
let operator = '';
let isSetLeftOperand = false;
let isSetRightOperand = false;
let currentState = 'init';

function resetAll() {
    leftOperand = '';
    rightOperand = '';
    operator = '';
    isSetLeftOperand = false;
    isSetRightOperand = false;
    currentState = 'init';
}

const displayText = document.querySelector('.display-text');
function updateDisplay(string) {
    if (string.length >= 25) {
        let truncString = string.slice(0, 25 - 3) + '...';
        displayText.textContent = truncString;
    } else {
        displayText.textContent = string;
    }
}

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    resetAll();
    updateDisplay('');
});

const numberButtons = document.querySelectorAll('.number-button');
for (let button of numberButtons) {
    button.addEventListener('click', () => {
        let number = button.textContent;

        if (currentState == 'result') {
            resetAll();
        }

        if (!isSetLeftOperand) {
            // console.log(`left operand not set, adding number to left operand`);
            currentState = 'left';
            leftOperand += number;
            updateDisplay(leftOperand);
        } else {
            // console.log(`left operand set, adding number to right operand`);
            currentState = 'right';
            rightOperand += number;
            updateDisplay(rightOperand);
        }
    });
}

const decimalButton = document.querySelector('.decimal-button');

decimalButton.addEventListener('click', () => {
    if (currentState == 'left') {
        if (!leftOperand.includes('.')) {
            leftOperand += '.';
            updateDisplay(leftOperand);
        }
    }
    if (currentState == 'right') {
        if (!rightOperand.includes('.')) {
            rightOperand += '.';
            updateDisplay(rightOperand);
        }
    }
});

const operatorButtons = document.querySelectorAll('.operator-button');

for (let button of operatorButtons) {
    button.addEventListener('click', () => {
        currentState = 'operation';
        if (leftOperand.length > 0) {
            if (!isSetLeftOperand) {
                isSetLeftOperand = true;
            } else if (rightOperand.length > 0) {
                let result = operate(operator, leftOperand, rightOperand);
                leftOperand = result.toString();
                rightOperand = '';

                updateDisplay(leftOperand);
            }
        }
        operator = button.textContent;
    });
}

const calculateButton = document.querySelector('.calculate-button');
calculateButton.addEventListener('click', () => {
    if (isSetLeftOperand && operator.length > 0 && rightOperand.length > 0) {
        let result = operate(operator, leftOperand, rightOperand);
        if (result) {
            currentState = 'result';
            leftOperand = result.toString();
            rightOperand = '';
            updateDisplay(leftOperand);
        }
    }
});

const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', () => {
    if (currentState == 'left') {
        leftOperand = leftOperand.slice(0, leftOperand.length - 1);
        updateDisplay(leftOperand);
    } else if (currentState == 'right') {
        rightOperand = rightOperand.slice(0, rightOperand.length - 1);
        updateDisplay(rightOperand);
    } else if (currentState == 'result' || currentState == 'init') {
        resetAll();
        updateDisplay('');
    }
});

function initCalculator() {
    updateDisplay('Mathematics strikes back');
}
window.onload = initCalculator();

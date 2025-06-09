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
let currentSet = null;

function resetAll() {
    leftOperand = '';
    rightOperand = '';
    operator = '';
    isSetLeftOperand = false;
    isSetRightOperand = false;
}

const displayText = document.querySelector('.display-text');
function updateDisplay(string) {
    displayText.textContent = string;
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

        if (!isSetLeftOperand) {
            console.log(`left operand not set, adding number to left operand`);
            currentSet = 'left';
            leftOperand += number;
            updateDisplay(leftOperand);
        } else {
            console.log(`left operand set, adding number to right operand`);
            currentSet = 'right';
            rightOperand += number;
            updateDisplay(rightOperand);
        }
    });
}

const operatorButtons = document.querySelectorAll('.operator-button');
for (let button of operatorButtons) {
    button.addEventListener('click', () => {
        if (leftOperand.length > 0) {
            console.log(`left operand is a number`);

            if (!isSetLeftOperand) {
                console.log(
                    `left operand is not set, setting it to true now !`
                );
                isSetLeftOperand = true;
            } else if (rightOperand.length > 0) {
                console.log(
                    `left operand is set and right operand is a number\n\tcalculating...`
                );

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
            leftOperand = result.toString();
            rightOperand = '';

            updateDisplay(leftOperand);
        }
    }
});

const returnButton = document.querySelector('.return-button');
returnButton.addEventListener('click', () => {
    if (currentSet == 'left') {
        leftOperand = leftOperand.slice(0, leftOperand.length - 1);
        updateDisplay(leftOperand);
    } else if (currentSet == 'right') {
        rightOperand = rightOperand.slice(0, rightOperand.length - 1);
        updateDisplay(rightOperand);
    }
});

function initCalculator() {
    updateDisplay('Mathematics strikes back.');
}
window.onload = initCalculator();

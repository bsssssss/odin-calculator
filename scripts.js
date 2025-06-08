const calculator = document.querySelector('.calculator');
const displayText = document.querySelector('.display-text');
const buttons = document.querySelectorAll('button');
const resetBtn = document.querySelector('.reset');
const numpad = document.querySelector('.numpad');
const operators = document.querySelector('.operators');

function initCalculator() {
    displayText.textContent = 'Mathematics strikes back.';
}

// for (let button of buttons) {
//     button.addEventListener('mouseover', (e) => {
//         console.log(`hovering ${e.target}`);
//         button.style.opacity = 0.5;
//     });
//     button.addEventListener('mouseout', (e) => {
//         console.log(`leaving ${e.target}`);
//         button.style.opacity = 1;
//     });
// }

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

// variables
const number = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#one');
const equals = document.querySelector('#equals');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#delete');
const display = document.querySelector('#display');
const result = document.querySelector('#result');

//Buttons
//display.textContent = '';
let num1;
let num2;
let operator;
let answer;

number.forEach(item => {
    item.addEventListener('click', () => {
        display.textContent = item.value;
    })
});

operators.forEach(item => {
    item.addEventListener('click', () => {
        num1 = display.textContent;
        operator = item.value;
    })
})

clear.addEventListener('click', () => {
    display.textContent = '';
});

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.trim();
    display.textContent = display.textContent.substr(0, display.textContent.length - 1);
});

equals.addEventListener('click', () => {
    num2 = display.textContent;
    operate(operator, num1, num2);
    display.textContent = answer;
});

//functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

function divided(a, b) {
    if (b === 0) {
        return 'Thou shalt not divide by zero.';
    } else {
        return a / b;
    } 
}

function operate(operator, num1, num2) {
    switch (operator) {
        case 'plus':
            answer = add(num1, num2);
            break;
    }
}
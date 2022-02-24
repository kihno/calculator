// variables
const number = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('#dot');
const equals = document.querySelector('#equals');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#delete');
const screen = document.querySelector('#display');
const result = document.querySelector('#result');

//Buttons
let num1;
let num2;
let operator;
let previousKey;
let answer;

number.forEach(item => {
    item.addEventListener('click', () => {
        display(item);
        removeClass();
        previousKey = item;
    })
});

operators.forEach(item => {
    item.addEventListener('click', () => {
        num1 = parseFloat(screen.textContent);
        operator = item.value;
        item.className += ' active';
        previousKey = item;
        dot.disabled = false;
    })
});

dot.addEventListener('click', () => {
    dot.disabled = true;
});

clear.addEventListener('click', () => {
    screen.textContent = '';
    result.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
    answer = '';
    previousKey = '';
});

backspace.addEventListener('click', () => {
    //screen.textContent = display.textContent.trim();
    screen.textContent = screen.textContent.slice(0, -1);
});

equals.addEventListener('click', () => {
    num2 = parseFloat(screen.textContent);
    operate(operator, num1, num2);
    screen.textContent = answer;
    previousKey = '';
    dot.disabled = false;
});

//functions
function display(item) {
    if (screen.textContent === '' || previousKey.className === 'operator active' || previousKey === '') {
        screen.textContent = item.value;
    } else {
        screen.textContent += item.value;
    }
}

function removeClass() {
    operators.forEach(item => {
        item.classList.remove('active');
    });
}

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
    if (num2 === undefined) {
        answer = num1;
    } else {
        switch (operator) {
            case '+':
                answer = add(num1, num2);
                break;
            case '-':
                answer = subtract(num1, num2);
                break;
            case 'x':
                answer = times(num1, num2);
                break;
            case '/':
                answer = divided(num1, num2);
                break;
        }
    }
}

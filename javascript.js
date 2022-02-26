// variables
const number = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('#dot');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#delete');
const screen = document.querySelector('#display');
const log = document.querySelector('#log');

//Buttons
screen.textContent = 0;
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
        if  (num1 !== undefined && previousKey !== equals) {
            log.textContent += item.value;
            calculate();
            num1 = answer;
            operator = item.value;
            item.className += ' active';
            previousKey = item;
            dot.disabled = false;
        } else {
            log.textContent += item.value;
            num1 = parseFloat(screen.textContent);
            operator = item.value;
            item.className += ' active';
            previousKey = item;
            dot.disabled = false;
        }
    })
});

dot.addEventListener('click', () => {
    dot.disabled = true;
});

clear.addEventListener('click', () => {
    log.textContent = '';
    screen.textContent = 0;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    previousKey = undefined;
    answer = undefined;
    removeClass();
    clear.blur();
    backspace.blur();
});

backspace.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
});

equals.addEventListener('click', () => {
    calculate();
    num1 = screen.textContent;
    previousKey = equals;
    dot.disabled = false;
});

window.addEventListener('keydown', (e) => {
    let button = document.querySelector(`button[value='${e.key}']`);
    if (!button) return;
    button.click();
});


//functions
function display(item) {
    if (screen.textContent === '0' || screen.textContent === '' || previousKey.className === 'operator active' || previousKey === undefined) {
        screen.textContent = item.value;
        log.textContent += item.value;
    } else {
        screen.textContent += item.value;
        log.textContent += item.value;
    }
}

function removeClass() {
    operators.forEach(item => {
        item.classList.remove('active');
    });
}

function calculate() {
    num2 = parseFloat(screen.textContent);
    operate(operator, num1, num2);
    screen.textContent = answer;
    previousKey = '';
    dot.disabled = false;
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
        switch (operator) {
            case '+':
                answer = add(num1, num2);
                break;
            case '-':
                answer = subtract(num1, num2);
                break;
            case '*':
                answer = times(num1, num2);
                break;
            case '/':
                answer = divided(num1, num2);
                break;
        }
}

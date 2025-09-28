


// Calculation functions 

function add (a,b) {
    return a + b
}

function subtract (a,b) {
    return a - b
}

function multiply (a,b) {
    return a * b
}

function divide (a,b) {
    return a / b
}

let numOne
let operator
let numTwo


function operate (numOne, numTwo, operator) {
    switch (operator) {
        case add:
            return add (numOne, numTwo);
            break;
        case subtract: 
            return subtract (numOne, numTwo);
            break;
        case multiply: 
            return multiply (numOne, numTwo);
            break;
        case divide: 
            return divide (numOne, numTwo);
            break;
    }
}

console.log (operate(3,2,multiply))


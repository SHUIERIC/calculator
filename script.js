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


/* function operate (numOne, numTwo, operator) {
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
*/

//Button

let displayValue = ""

const buttons = document.querySelectorAll (".key")
const display = document.querySelector(".display")

buttons.forEach((button) =>{
    button.addEventListener ("click", (e)=>{
    const value = e.target.textContent;
    displayValue += value;
    display.textContent = displayValue
    })
}) 
    

// User Input Variable 
function splitNum (input) {
    let numOne;
    let operator;
    let numTwo;

    if (input.includes ("+")) {
        [numOne, numTwo] = input.split("+");
        operator = "+"
    } else if (input.includes ("-")) {
        [numOne, numTwo] = input.split("-");
        operator = "-"
    } else if (input.includes ("x")) {
        [numOne, numTwo] = input.split("x");
        operator = "x"
    } else if (input.includes ("/")) {
        [numOne, numTwo] = input.split("/");
        operator = "/"
} 

    numOne= parseInt (numOne);
    numTwo= parseInt (numTwo);

    return result = {numOne, numTwo, operator}
}

function operate ( {numOne, numTwo, operator} ) {

    switch (operator) {
        case "+":
            return add (numOne, numTwo);
            break;
        case "-": 
            return subtract (numOne, numTwo);
            break;
        case "x": 
            return multiply (numOne, numTwo);
            break;
        case "/": 
            return divide (numOne, numTwo);
            break;
    }
}

const equalBtn = document.querySelector (".equal")
equalBtn.addEventListener("click", ()=> {
    const finalResult = operate(splitNum(displayValue));
    display.textContent = finalResult;    
}
)

let firstNum = undefined;

const operatorBtn = document.querySelectorAll (".operator")
operatorBtn.forEach ( (btn) =>
    btn.addEventListener ("click", (e) => {
        if (firstNum === undefined) {
            firstNum = parseInt (displayValue)
            currentOperator = e.target.textContent
            display.textContent = `${firstNum}${currentOperator}`;
            displayValue = ""
        } else {
            let secondNum = parseInt(displayValue)
            const intermediateResult = operate({numOne: firstNum, numTwo: secondNum, operator: currentOperator}) 

            firstNum = intermediateResult;
            currentOperator = e.target.textContent;
            display.textContent = `${intermediateResult}${currentOperator}`
            displayValue = ""
        }
        }
    )
)




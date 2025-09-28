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

function operate (arr) {
    const [numOne, operator, numTwo] = arr

    switch (operator) {
        case "+":
            return add(Number(numOne), Number(numTwo));
        case "-": 
            return subtract (Number(numOne), Number(numTwo))
        case "x": 
            return multiply (Number(numOne), Number(numTwo))
        case "÷": 
            return (Number(numTwo) === 0)    
                ? (clearBtn.click(), alert ("You can not divide by zero!"))
                : divide (Number(numOne), Number(numTwo))
}
}

//Button input 
let displayValue = ""

const numButtons = document.querySelectorAll (".key")
const opButttons = document.querySelector (".operator")
const display = document.querySelector(".display")

numButtons.forEach((button) =>{
    button.addEventListener ("click", (e)=>{
    const value = e.target.textContent;
    displayValue += value;
    display.textContent = displayValue
    })
}) 

// Equal button logic 
const equalBtn = document.querySelector (".equal")
equalBtn.addEventListener("click", ()=> {
    const arr = displayValue.split(/([\+\-\x\÷])/).filter(Boolean);;
    console.log("tokens:", arr);
    
    if (arr.length === 3) {
    const result = operate(arr);
    const roundedResult = Number(result.toFixed(1))
    display.textContent = roundedResult;
    } else {
        display.textContent = "ERROR"
    }
}
)

// Sequential calculation when 2 operator is clicked

opButttons.addEventListener ("click", (e) => {
    const value = e.target.textContent;
    displayValue += value;
    display.textContent = displayValue

    const arr = displayValue.split(/([\+\-\x\÷])/).filter(Boolean);
    console.log("tokens:", arr);

    if (arr.length == 2) {
        return displayValue = arr.join("")
    } else if (arr.length ==4) {
        const interArr = arr.slice(0,3);
        let result = operate (interArr);
        const roundedResult = Number(result.toFixed(1))
        displayValue = `${roundedResult}${arr[3]}`
    }

    display.textContent=displayValue
}
)

// Clear button 

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener ("click", (e)=> {
    displayValue=""
    display.textContent=displayValue
}
)




    



/*function splitNum (input) {
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

*/





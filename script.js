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

//Number button input and display
let displayValue = ""

const numButtons = document.querySelectorAll (".key")
const display = document.querySelector(".display")

numButtons.forEach((button) =>{
    button.addEventListener ("click", (e)=>{
    const value = e.target.textContent;
    displayValue += value;
    display.textContent = displayValue
    })
}) 

// Decimal button logic 
const decimalBtn = document.querySelector(".decimal")

decimalBtn.addEventListener ("click", (e) => {
    const arr = displayValue.split(/([\+\-\x\÷])/).filter(Boolean);
    console.log("decimal:", arr);
    if (arr[0] &&!arr[0].includes(".")) {
        arr[0] += "."
    } if (arr[2] && !arr[2].includes(".")) {
        arr[2] += "."  
    }
    displayValue = arr.join("")
    display.textContent = displayValue
} 
)

// Backspace button logic
const backBtn = document.querySelector(".back")

backBtn.addEventListener ("click", () =>{
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue
}
)

// Equal button logic 
const equalBtn = document.querySelector (".equal")

equalBtn.addEventListener("click", ()=> {
    const arr = displayValue.split(/([\+\-\x\÷])/).filter(Boolean);;
    console.log("equal:", arr);
    
    if (arr.length === 3) {
    const result = operate(arr);
    const roundedResult = Number(result.toFixed(1));
    display.textContent = roundedResult;
    displayValue = "";
    } else {
        display.textContent = "ERROR"
    }
}
)

// Operator button logic
const opButtons = document.querySelector (".operator")
opButtons.addEventListener ("click", (e) => {
    const value = e.target.textContent;
    displayValue += value;
    display.textContent = displayValue

    const arr = displayValue.split(/([\+\-\x\÷])/).filter(Boolean);
    console.log("operator:", arr);

    if (isNaN(Number(arr[0]))) {
        displayValue = "";
    } else if (arr.length > 2 && isNaN(Number(arr[1])) && isNaN(Number(arr[2]))) {
        arr[arr.length - 2] = arr[arr.length - 1];
        arr.splice(-1,1)
        console.log("++", arr)
        displayValue = arr.join("")
    } else if (arr.length == 4) {
        const interArr = arr.slice(0,3);
        let result = operate (interArr);
        const roundedResult = Number(result.toFixed(1))
        displayValue = `${roundedResult}${arr[3]}`
    } 
        display.textContent=displayValue
    }
)

// Clear button logic
const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener ("click", (e)=> {
    displayValue=""
    display.textContent=displayValue
}
)

// Keyboard binding (excluding numPad)
const opBtnBind = document.querySelectorAll (".operator button")
window.addEventListener("keydown", (e) => {
    if (e.defaultPrevented) return;

    switch (e.code) {
        case "Digit0": displayValue += "0"; break;
        case "Digit1": displayValue += "1"; break;
        case "Digit2": displayValue += "2"; break;
        case "Digit3": displayValue += "3"; break;
        case "Digit4": displayValue += "4"; break;
        case "Digit5": displayValue += "5"; break;
        case "Digit6": displayValue += "6"; break;
        case "Digit7": displayValue += "7"; break;
        case "Digit8": displayValue += "8"; break;
        case "Digit9": displayValue += "9"; break;
        case "Backspace": backBtn.click(); break;
        case "Period": decimalBtn.click(); break;
        case "KeyC":clearBtn.click();break;
    }
    
    opBtnBind.forEach((button) => {
    if (e.key === button.dataset.key) {
        button.click()
    }
    })

    if (e.key === "=" && !e.shiftKey) {
        equalBtn.click();
    }

    if (displayValue !== "") {
        display.textContent = displayValue;
    }
}
);


    




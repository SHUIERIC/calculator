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

opButttons.addEventListener ("click", (e) => {
    const value = e.target.textContent;
    displayValue += value;
    display.textContent = displayValue

    const arr = displayValue.split(/([\+\-\x\/])/).filter(Boolean);;
    console.log("tokens:", arr);

    if (arr.length == 2) {
        return displayValue = arr.join("")
    } else if (arr.length ==4) {
        const interArr = arr.slice(0,3);
        let result = operate (interArr);
        displayValue = `${result}${arr[3]}`
    }

    display.textContent=displayValue
}
)

const equalBtn = document.querySelector (".equal")
equalBtn.addEventListener("click", ()=> {
    const finalResult = operate(displayValue.split(/([\+\-\x\/])/).filter(Boolean));
    display.textContent = finalResult;    
}
)


    

// User Input Variable 

// displayValue="20+3"
// let array = displayValue.split(/([\+\-\x\/])/);



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

function operate (arr) {
    const [numOne, operator, numTwo] = arr

    switch (operator) {
        case "+":
            return add(Number(numOne), Number(numTwo));
            break;
        case "-": 
            return subtract (Number(numOne), Number(numTwo));
            break;
        case "x": 
            return multiply (Number(numOne), Number(numTwo));
            break;
        case "/": 
            return divide (Number(numOne), Number(numTwo));
            break;
    }
}



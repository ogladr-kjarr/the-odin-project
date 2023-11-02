let calculator = {
    operandA: null,
    operandAPeriod: null,
    operandB: null,
    operandBPeriod: null,
    operation: null,
    isAnswer: false,
    displayValue: null,
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(a, b, operation) {
    switch(operation) {
        case '+': return add(a, b); break;
        case '-': return subtract(a, b); break;
        case '*': return multiply(a, b); break;
        case '/': return divide(a, b); break;
    }
}

// On sign click. If no first number, do nothing
// On sign click. If first number, save as operation, clear screen
// On sign click. If second number, add first two, save
//  outcome as first number, display on screen, save as isAnswer

function onEqualsClick(event){
    if(calculator.operandB != null){
        const calculatedValue = operate(calculator.operandA,
            calculator.operandB,
            calculator.operation);

            calculator.operandA = calculatedValue;
            calculator.isAnswer = true;
            calculator.operandB = null;
            calculator.operandBPeriod = null;
            calculator.operation = null;     
            updateDisplay(calculatedValue);        
    }
}

function onOperationClick(event) {

    if(calculator.operandB != null){
        const calculatedValue = operate(calculator.operandA,
                                        calculator.operandB,
                                        calculator.operation);

        calculator.operandA = calculatedValue;
        calculator.isAnswer = true;
        calculator.operandB = null;
        calculator.operandBPeriod = null;
        calculator.operation = event.currentTarget.innerText;     
        updateDisplay(calculatedValue);
    }else if(calculator.operandA != null){
        calculator.operation = event.currentTarget.innerText;
    }
}     

// On equals click. If no first number, do nothing
// On equals click. if no second number, do nothing
// If second number, add first two save outcome as first 
//  number, show on screen, save as isAnswer

function onClearClick(){
    calculator.operandA = null;
    calculator.operandAPeriod = null;
    calculator.operandB = null;
    calculator.operandBPeriod = null;
    calculator.operation = null;
    calculator.isAnswer = false;
    calculator.displayValue = null;
    updateDisplay("");
}

function updateDisplay(number) {
    const display = document.querySelector(".display");
    display.textContent = number;
}

function onNumberClick(event) {
    const newlyEnteredNumber = event.currentTarget.innerText;
    
    if(calculator.operation == null){
        if(calculator.isAnswer == true){
            calculator.operandA = newlyEnteredNumber;
            calculator.isAnswer = false; 
        }else if(calculator.operandA == null){
            calculator.operandA = newlyEnteredNumber;
        }else {
            calculator.operandA += newlyEnteredNumber;
        }
        updateDisplay(calculator.operandA);
    } else {
        if(calculator.operandB == null){
            calculator.operandB = newlyEnteredNumber;
        }else{
            calculator.operandB += newlyEnteredNumber; 
        }

        updateDisplay(calculator.operandB);
    }
}

function onPeriodClick(event){
    if(calculator.operation == null){
        if(calculator.operandAPeriod == null){
            if(calculator.operandA == null){
                calculator.operandA = ".";
            } else {
                calculator.operandA += ".";
            }
            calculator.operandAPeriod = true;
            updateDisplay(calculator.operandA);
        }
    } else {
        if(calculator.operandBPeriod == null){
            if(calculator.operandB == null) {
                calculator.operandB = ".";
            } else {
                calculator.operandB += ".";
            }
            calculator.operandBPeriod = true;
            updateDisplay(calculator.operandB);
        }
    }
}

function onBackspaceClick(event){
    if(calculator.operation == null){
        if(calculator.operandA != null){
            let length = calculator.operandA.toString().length;
            let currentChar = calculator.operandA.toString().substr(length - 1, length);
            calculator.operandA = calculator.operandA.toString().substr(0, length - 1);
            if(currentChar == "."){
                calculator.operandAPeriod = null;
            }
            updateDisplay(calculator.operandA);
        }
    } else {
        if(calculator.operandB != null){
            let length = calculator.operandB.toString().length;
            let currentChar = calculator.operandB.toString().substr(length - 1, length);
            calculator.operandB = calculator.operandB.toString().substr(0, length - 1);
            if(currentChar == "."){
                calculator.operandBPeriod = null;
            }
            updateDisplay(calculator.operandB);
        }
    }
}

function addPeriodEventListener(){
    const periodButton = document.querySelector(".period");
    periodButton.addEventListener("click", onPeriodClick);
}

function addNumberEventListeners(){

    const numberButtons = document.querySelectorAll(".number");

    for(let i = 0; i < numberButtons.length; i++){
        numberButtons[i].addEventListener("click", onNumberClick);
    }
}

function addOperationEventListeners() {
    const operationButtons = document.querySelectorAll(".operator");

    for(let i = 0; i < operationButtons.length; i++){
        operationButtons[i].addEventListener("click", onOperationClick);
    }
}

function addEqualsEventListener() {
    const equalsButton = document.querySelector(".equals");
    equalsButton.addEventListener("click", onEqualsClick);
}

function addClearEventListener() {
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", onClearClick);
}

function addBackspaceEventListener() {
    const backspaceButton = document.querySelector(".backspace");
    backspaceButton.addEventListener("click", onBackspaceClick);
}

addNumberEventListeners();
addOperationEventListeners();
addEqualsEventListener();
addClearEventListener();
addPeriodEventListener();
addBackspaceEventListener();
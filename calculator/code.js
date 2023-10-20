let calculator = {
    operandA: null,
    operandB: null,
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
    calculator.operandB = null;
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

function addNumberEventListeners(){

    const numberButtons = document.querySelectorAll(".number")

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

addNumberEventListeners();
addOperationEventListeners();
addEqualsEventListener();
addClearEventListener();
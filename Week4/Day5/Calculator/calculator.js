let currentInput = '';
let currentOperation = '';
let previousInput = '';


function updateDisplay() {
    document.getElementById('display').innerText = `${previousInput} ${currentOperation} ${currentInput}`.trim() || 0;
}

function number(num) {
    if (num === "." && currentInput.includes(".")) return;
    currentInput += num;
    updateDisplay();
}

function operator(op){
    if (currentInput === '') return;
    if (previousInput !== ''){
        equal();
    }

    currentOperation = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay();
}


function equal(){
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

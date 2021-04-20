const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const clearBtn = document.querySelector('#clear');
let inputValue = 0;
let currentNum = 0;
let result = 0;
let counter = 0;
let decimalUsed = false;
let operationArr = [];

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}
    
function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return 'ERROR, please reset.';
            break;
    }
}

function displayNumbers(){
    if(inputValue === 0){
        inputValue = this.innerText;
    }
    else{
        if(this.innerText === '.'){
            if(decimalUsed){
                output.textContent = inputValue;
            }
            else{
                decimalUsed = true;
                inputValue += this.innerText;
            }
        }
        else{
            inputValue += this.innerText;
        }
    }
    output.textContent = inputValue;
}

function operatorPressed(){
    counter++;
    decimalUsed = false;
    inputValue = 0;
    operationArr[0] = operationArr[1];
    operationArr[1] = this.innerText;
    if(counter === 1){
        result = output.textContent;
    }
    else{
        currentNum = output.textContent;
        result = operate(operationArr[0], result, currentNum);
        if(!(isFinite(result))){
            output.textContent = 'Please do not divide by zero.';
            inputValue = 0;
            result = 0;
            operationArr = [];
            counter = 0;
            decimalUsed = false;
        }
        else{
            output.textContent = result;
            console.table(operationArr);
            if(operationArr[1] === '='){
                inputValue = 0;
                result = 0;
                operationArr = [];
                counter = 0;
                decimalUsed = false;
                if(operationArr[0] === '='){
                    clearSlate();
                }
            }
        }
    }
}

function clearSlate(){
    inputValue = 0;
    result = 0;
    operationArr = [];
    output.textContent = 0;
    counter = 0;
    decimalUsed = false;
}

buttons.forEach(item =>{
    item.addEventListener('click', displayNumbers);
});

operatorButtons.forEach(item =>{
    item.addEventListener('click', operatorPressed);
});

clearBtn.addEventListener('click', clearSlate);
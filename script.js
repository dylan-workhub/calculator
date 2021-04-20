const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equateBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
let inputValue = 0;
let operationArr = [];
let result = 0;

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
            return 'ERROR';
            break;
    }
}

function displayNumbers(){
    if(inputValue === 0){
        inputValue = this.innerText;
    }
    else{
        inputValue += this.innerText;
    }
    output.textContent = inputValue;
}

function operatorPressed(){
    let currentOperator = this.innerText;
    let tempObj = {};
    tempObj.number = inputValue;
    tempObj.operator = currentOperator;
    operationArr.push(tempObj);
    inputValue = 0;
}

function equateOperation(){
    for(let i = 0; i < operationArr.length; i++){
        if(operationArr[i].operator === '='){
            console.log(result);
            break;
        }
        else if(i === 0){
            result += operate(operationArr[i].operator, operationArr[i].number, operationArr[i + 1].number);
        }
        else{
            result = operate(operationArr[i].operator, result, operationArr[i + 1].number);
        }
        output.textContent = result;
    }
}

function clearSlate(){
    inputValue = 0;
    result = 0;
    operationArr = [];
    output.textContent = 0;
}

buttons.forEach(item =>{
    item.addEventListener('click', displayNumbers);
});

operatorButtons.forEach(item =>{
    item.addEventListener('click', operatorPressed);
});

equateBtn.addEventListener('click', equateOperation);

clearBtn.addEventListener('click', clearSlate);
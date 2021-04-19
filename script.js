const output = document.querySelector('#output');
const buttons = document.querySelectorAll('button');

function add(num1, ...num){
    let numArgs = arguments.length;
    let total = 0;

    for(let i = 0; i < numArgs; i++){
        total += arguments[i];
    }

    return total;
}

function subtract(num1, ...num){
    let numArgs = arguments.length;
    let total = num1;

    for(let i = 0; i < numArgs; i++){
        total -= arguments[i];
    }

    return total;
}
    
function multiply(num1, ...num){
    let numArgs = arguments.length;
    let total = 1;

    for(let i = 0; i < numArgs; i++){
        total *= arguments[i];
    }

    return total;
}

function divide(num1, num2){
    if(num2 === 0){
        return 'Can\'t do that one, sorry.'
    }

    let total = num1 / num2;

    return total;
}

function operate(operator, num1, num2){
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
    output.textContent += this.innerText;
}

buttons.forEach(item =>{
    item.addEventListener('click', displayNumbers);
});
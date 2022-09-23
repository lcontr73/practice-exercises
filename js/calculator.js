const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');
const leftOperand = document.querySelector('#left-operand');
const operatorValue = document.querySelector('#operator');
const rightOperand = document.querySelector('#right-operand');

keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const operator = key.dataset.operator;
            const keyText = key.textContent;
            const displayedNumLeft = leftOperand.textContent;
            const displayedOperator = operatorValue.textContent;
            const displayedNumRight = rightOperand.textContent;

// Determines where to display output
            if (!operator) {
                if (displayedNumLeft === '') {
                    leftOperand.textContent = keyText
                } else if (displayedNumLeft !== '' && displayedOperator === '') {
                    leftOperand.textContent = displayedNumLeft + keyText
                } else if (displayedNumLeft !== '' && displayedOperator !== '' && displayedNumRight === '') {
                    rightOperand.textContent = keyText
                } else if (displayedNumRight !== '') {
                    rightOperand.textContent = displayedNumRight + keyText
                }
            }

// Determines which text box to display the operator
            if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
                if (displayedOperator === '') {
                    operatorValue.textContent = keyText
                }
            }

// Clears all text boxes when the 'C' button is pressed
            if (operator === 'clear') {
                operatorValue.textContent = ''
                leftOperand.textContent = ''
                rightOperand.textContent = ''
            }

// Runs calculation based off of the inputs
            if (operator === 'calculate') {
                leftOperand.textContent = decimal_test(calculate(displayedNumLeft, displayedOperator, displayedNumRight));
                rightOperand.textContent = ''
                operatorValue.textContent = ''
            }
        }
    }
)

//function for determining if value is a whole number
function decimal_test(n) {
    let test = (n - Math.floor(n)) !== 0;
    if (test)
        return n.toFixed(2); // fixes to two decimal places
    else
        return n;
}


//Function to calculate solution
const calculate = (displayedNumLeft, displayedOperator, displayedNumRight) => {
    let result = ''
    if (displayedOperator === '+') {
        result = parseFloat(displayedNumLeft) + parseFloat(displayedNumRight)
    } else if (displayedOperator === '-') {
        result = parseFloat(displayedNumLeft) - parseFloat(displayedNumRight)
    } else if (displayedOperator === '*') {
        result = parseFloat(displayedNumLeft) * parseFloat(displayedNumRight)
    } else if (displayedOperator === '/') {
        result = parseFloat(displayedNumLeft) / parseFloat(displayedNumRight)
    }
    return result
}

// Listens for which keys are pressed and console logs if it's a number or operator
keys.addEventListener('click', e => {
    const key = e.target;
    const operator = key.dataset.operator;
    if (e.target.matches('button')) {
    }
    if (!operator) {
        console.log('numbers')
    }

    if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
        console.log('operator key')
    }
    if (operator === 'clear') {
        console.log('clear key')
    }
    if (operator === 'calculate') {
        console.log('equal key')
    }
})


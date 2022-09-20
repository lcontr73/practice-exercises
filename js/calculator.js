const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeys')
const leftOperand = document.querySelector('#left-operand')
const operatorValue = document.querySelector('#operator')
const rightOperand = document.querySelector('#right-operand')

keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const operator = key.dataset.operator
            const keyText = key.textContent
            const displayedNumLeft = leftOperand.textContent
            const displayedOperator = operatorValue.textContent
            const displayedNumRight = rightOperand.textContent

            if (!operator) {
                if (displayedNumLeft === '') {
                    leftOperand.textContent = keyText
                } else if (displayedNumLeft !== '' && displayedOperator === ''){
                    leftOperand.textContent = displayedNumLeft + keyText
                } else if (displayedNumLeft !== '' && displayedOperator !== '' && displayedNumRight === '') {
                    rightOperand.textContent = keyText
                } else if (displayedNumRight !== '') {
                    rightOperand.textContent = displayedNumRight + keyText
                }
            }

            if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
                if (displayedOperator === '') {
                    operatorValue.textContent = keyText
                }
            }
            if (operator === 'clear') {
               operatorValue.textContent = ''
                leftOperand.textContent = ''
                rightOperand.textContent = ''
            }
        }
    }
)
// Listens for which keys are pressed and console logs if its a number or operator
keys.addEventListener('click', e => {
    const key = e.target
    const operator = key.dataset.operator
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


// function display(value) {
//     // if (value===)
//     // document.getElementById("left-operand").value+=value;
//     if (value === "+" || value === "-" || value ==="*" || value === "/") {
//         document.getElementById("operator").value += value;
//
//     } else {
//         document.getElementById("left-operand").value+=value;
//     }
// }
//
// function clearInput() {
//     document.getElementById("left-operand").value="";
//     document.getElementById("operator").value="";
// }
//
// function calculate() {
//
// }


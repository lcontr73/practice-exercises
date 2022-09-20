
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeys')



keys.addEventListener('click', e=> {
    const key = e.target
    const operator = key.dataset.operator
    if (e.target.matches('button')) {

    }
    if(!operator) {
        console.log('number key')
    }

    if (operator ==='add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
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


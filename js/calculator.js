// let str = prompt('Please enter a word');
// console.log(str);

function display(value) {
    // if (value===)
    // document.getElementById("left-operand").value+=value;
    if (value === "+" || value === "-" || value ==="*" || value === "/") {
        document.getElementById("operator").value+=value;
    } else {
        document.getElementById("left-operand").value+=value;
    }
}

function clearInput() {
    document.getElementById("left-operand").value="";
    document.getElementById("operator").value="";
}


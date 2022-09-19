// let str = prompt('Please enter a word');
// console.log(str);

function display(value) {
    document.getElementById("left-operand").value+=value;
    // if (value === "+" || value === "-") {
        // document.getElementById("operator").value+=value;
    // }
}

function clearInput() {
    document.getElementById("left-operand").value="";
}


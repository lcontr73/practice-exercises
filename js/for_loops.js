"use strict";

//function to create a multiplication table up to 10 using a prompt to input a number
let num1 = prompt('Please pick a number!!')
function showMultiplicationTable(num2) {
    let i = 1;
    if (isNaN(num2) === true) {
        console.log('Please try again!!')
    } else
    while (i <= 10) {
        console.log(num2 + ' x ' + i + ' = ' + (num2 * i));
        i++;
    }

}

showMultiplicationTable(num1);



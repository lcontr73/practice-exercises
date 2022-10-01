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


// For loop to generate 10 random numbers between 20 and 200 and displays output in HTML
var generateRandomNumbers = confirm('Activate the 10 number random number generator!!');

function randomNumberOutput() {
    if (generateRandomNumbers === true) {
        for (var i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
            if (randomNumber % 2 === 0) {
                document.write(randomNumber + ' is an even number!!' + '<br>');
            } else {
               document.write(randomNumber + ' is an odd number!!' + '<br>');
            }
        }
    } else {
        alert('You chose not to play.');
    }
}



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
randomNumberOutput();

//number pyramid
function pyramid() {
    for (var i = 1; i <= 9; i++) {
        var string = i.toString().repeat(i)
        document.write(string + '<br>')
    }
}
pyramid();

//count down from 100 by 5
for (var i = 100; i > 0; i-=5) {
   console.log(i);
}

// Break and Continue
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// var oddNumber;
//
// do {
//     oddNumber = prompt('Please pick an odd number between 1 and 50.');
// } while (oddNumber % 2 === 0)

while (true) {
    var oddNumber = prompt('Please pick an odd number between 1 and 50.');
    if(oddNumber % 2 === 1) {
        break;
    }
    alert('Please try again.')
}

for (let x = 0; x <= 50; x++) {
    if (x === parseFloat(oddNumber)) {
        console.log('Yikes! Skipping number: ', oddNumber)
        continue;
    }
    if (x % 2 !== 0) {
        console.log(x);
    }
}



//while loops
let z = 1;
let x = 1;
while(z <= 16) {
    z++;
    x = x*2
    console.log(x);
}

function numbersDoubled (start, finish) {
    while(start <= finish) {
        console.log(start);
        start=start * 2;
    }
}

numbersDoubled(2,65536)

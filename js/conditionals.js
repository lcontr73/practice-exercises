"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 **/
function analyzeColor(colorName) {
    if (colorName === 'blue') {
        return (colorName + ' is the color of the sky')
    } else if (colorName === 'red') {
        return ('Strawberries are ' + colorName)
    } else
        return ('I don\'t know much about ' + colorName + '.')
}

console.log(analyzeColor('blue'))
console.log(analyzeColor('red'))
console.log(analyzeColor('green'))

function analyzeColorSwitch(colorNameAgain) {
    switch (colorNameAgain) {
        case 'blue':
            return (colorNameAgain + ' is the color of the sky');
            break;
        case 'red':
            return ('Strawberries are ' + colorNameAgain);
            break;
        default:
            return ('I don\'t know much about ' + colorNameAgain + '.');
            break;
    }
}

console.log(analyzeColorSwitch('blue'));
console.log(analyzeColorSwitch('red'));
console.log(analyzeColorSwitch('green'));
/**
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));
console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var pickAColor = prompt('Please pick a color!!');
alert(analyzeColor(pickAColor.toLowerCase()));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 **/

var random = Math.floor(Math.random() * (6));

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return ('You have no discount you have to pay: ' + totalAmount)
    } else if (luckyNumber === 1) {
        return ('You have a 10% discount and your new balance is: ' + (totalAmount - (totalAmount * .1)))
    } else if (luckyNumber === 2) {
        return ('You have a 25% discount and your new balance is: ' + (totalAmount - (totalAmount * .25)))
    } else if (luckyNumber === 3) {
        return ('You have a 35% discount and your new balance is: ' + (totalAmount - (totalAmount * .35)))
    } else if (luckyNumber === 4) {
        return ('You have a 50% discount and your new balance is: ' + (totalAmount - (totalAmount * .50)))
    } else if (luckyNumber === 5) {
        return ('Congratulations, you are our lucky winner and will get all your purchases for free!!')
    }
}

alert(calculateTotal(random, 100));
/**
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var userBill = prompt('What is your total bill??')

var newUserBill = calculateTotal(luckyNumber, userBill);
alert('Your lucky number is: ' + luckyNumber);
alert('Your price before the discount is $' + userBill);
alert(newUserBill);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 **/
var playAGame = confirm('Would you like to play a number game??')
if (playAGame === true) {
    var numberPicked = prompt('Please pick a number!!')

} else {
    alert('I guess you don\'t want to play');
}

//this determines if the value is not a number
if(isNaN(parseFloat(numberPicked))) {
    alert('This is not a number, please try again.')
}
//this determines if a number is even
if (numberPicked % 2 === 0) {
    console.log('The number is even.')
} else {
    console.log('The number is odd.')
}

//this determines if value is positive or negative
if(numberPicked >= 0) {
    console.log('The number is positive')
} else {
    console.log('The number is negative')
}

//this takes the number and adds 100 to it
console.log(parseFloat(numberPicked) + 100)
/**
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

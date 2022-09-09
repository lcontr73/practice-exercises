/**Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).
**/

//Looks for the word english inside of string
let string = "agkjnenglishsad";
let word = "english";

console.log(string.includes(word)); //true

//Looks for the word english inside newString
let newString = "asdfaseveaewrva";
let newWord = "english";

console.log(newString.includes(newWord)); //false


/** Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.
**/
//Min number is 1 max is 4 and increases by 1
function sumAllNumbers(num1, num2) {
    let sum = 0
    for (let i = num1; i <= num2; i+=1) {
        sum +=i
    }
    return sum
}
console.log(sumAllNumbers(1,4)) //output 10

//Min number is 4, max is 10 increases by 4
function sumAgain(num1, num2) {
    let sum = 0
    for (let i = num1; i <= num2;i+=4) {
        sum +=i
    }
    return sum
}
console.log(sumAgain(4,10)) //output 12

//Min number is 7, max is 10 increases by 1
function sumExample(num1, num2) {
    let sum = 0
    for (let i = num1; i <= num2;i+=1) {
        sum +=i
    }
    return sum
}
console.log(sumExample(7,10)) //output 34
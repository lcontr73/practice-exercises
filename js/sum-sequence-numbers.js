
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
"use strict";


function showMultiplicationTable (num1) {
    var i = 1;
    while(i <= 10) {
        console.log(num1 + ' x ' + i + ' = ' + (num1 * i) );
        i++
    }
}
showMultiplicationTable(5);
showMultiplicationTable(2);
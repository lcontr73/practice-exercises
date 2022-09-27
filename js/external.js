"use strict";
console.log("Hello from external JavaScript");

alert('Welcome to my Website');

var color = prompt('What is your favorite color?')

alert('Great ' + color.toLowerCase() + ' is my favorite color too!')

/**
 Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

 You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
 **/

var littleMermaidDays = prompt('How many days would you like to rent The Little Mermaid?');
var brotherBearDays = prompt('How many days would you like to rent Brother Bear?');
var herculesDays = prompt('How many days would you like to rent Hercules?');
var pricePerDay = prompt('How how much does it cost to rent a movie for one day?');
var priceForOneMoviePerDay = (parseFloat(pricePerDay).toFixed(2))

alert('$' + (((priceForOneMoviePerDay)) * (parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays))).toFixed(2));

/**
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
**/
var googlePayPerHour = prompt('How much is google paying you per hour?');
var amazonPayPerHour = prompt('How much is amazon paying you per hour?');
var facebookPayPerHour = prompt('How much is facebook paying you per hour?');

var googleHoursThisWeek = prompt('How many hours did you work at google this week?');
var amazonHoursThisWeek = prompt('How many hours did you work at amazon this week?');
var facebookHoursThisWeek = prompt('How many hours did you work at amazon this week?');

alert((parseFloat(googlePayPerHour) * parseFloat(googleHoursThisWeek)) + (parseFloat(amazonPayPerHour) * parseFloat(amazonHoursThisWeek)) + (parseFloat(facebookPayPerHour) * parseFloat(facebookHoursThisWeek)));

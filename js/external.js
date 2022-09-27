"use strict";
// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website');
//
// var color = prompt('What is your favorite color?')
//
// alert('Great ' + color.toLowerCase() + ' is my favorite color too!')
//
// /**
//  Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//  You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//  **/
//
// var littleMermaidDays = prompt('How many days would you like to rent The Little Mermaid?');
// var brotherBearDays = prompt('How many days would you like to rent Brother Bear?');
// var herculesDays = prompt('How many days would you like to rent Hercules?');
// var pricePerDay = prompt('How how much does it cost to rent a movie for one day?');
// var priceForOneMoviePerDay = (parseFloat(pricePerDay).toFixed(2))
//
// alert('$' + (((priceForOneMoviePerDay)) * (parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays))).toFixed(2));
//
// /**
//  Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//  **/
// var googlePayPerHour = prompt('How much is google paying you per hour?');
// var amazonPayPerHour = prompt('How much is amazon paying you per hour?');
// var facebookPayPerHour = prompt('How much is facebook paying you per hour?');
//
// var googleHoursThisWeek = prompt('How many hours did you work at google this week?');
// var amazonHoursThisWeek = prompt('How many hours did you work at amazon this week?');
// var facebookHoursThisWeek = prompt('How many hours did you work at amazon this week?');
//
// alert((parseFloat(googlePayPerHour) * parseFloat(googleHoursThisWeek)) + (parseFloat(amazonPayPerHour) * parseFloat(amazonHoursThisWeek)) + (parseFloat(facebookPayPerHour) * parseFloat(facebookHoursThisWeek)));
//
// /**
//  A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//  **/
// var isClassNotFull = confirm('Click "OK" if the class is not full!!');
// var isNoClassConflict = confirm('Click "OK" if the class does NOT CONFLICT with the students current schedule!!')
//
// if (isNoClassConflict && isClassNotFull === true) {
//     alert('The student can enroll for this class!!');
// } else
//     alert('WARNING!! The student CAN NOT enroll for this class!!');


/**
 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 **/
var isOfferNotExpired = confirm('Click "OK" if the offer is still valid!!');
var isMoreThanTwoPurchases = confirm('Click "OK" if the customer is purchasing more than two items!!');
var isPremiumMember = confirm('Click "OK" if the customer is a premium member!!');


if ((isOfferNotExpired && isMoreThanTwoPurchases) || isPremiumMember) {
    alert('Apply the product offer to the customers purchase!!')
} else if (!isPremiumMember && (!isOfferNotExpired || !isMoreThanTwoPurchases)) {
    var becomePremiumMember = confirm('Would you like to become a premium member and get special product offers on this and future purchases?');
    if (becomePremiumMember)
        alert('You are now a premium member!! All product offers apply');
    else
        alert('WARNING!! The product offer CANNOT be applied to this customers purchase!!');
} else
    alert('WARNING!! The product offer CANNOT be applied to this customers purchase!!');


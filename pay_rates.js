//helps give better errors related to our code(for exapmle not using variables i havent declared yet)
"use strict"

//this is the hourly rate for the employee
let payRate = 25.00;
let hoursWorked = 40;

//determine how man hours are normal hours vs overtime hours
let regularHours = 0;
let overtimeHours = 0;

//if the hours are greater than 40, we know they worked overtime
if( hoursWorked > 40){
//this is where we need to figure out the overtiem hours
 regularHours = hoursWorked;
 overtimeHours = hoursWorked - regularHours;
}else {
    //code for folks who didnt work overtime
    regularHours = hoursWorked;

}

//create some variables to represent the normal pay and the overtime pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

let grossPay = normalPay + overtimePay;

console.log("I got paid $" + normalPay.toFixed(2) + " for my regular hours");
console.log("I got paid $" + overtimePay.toFixed(2) + " for my overtime hours");
console.log("I got paid $" + grossPay.toFixed(2) + " for my gross pay");
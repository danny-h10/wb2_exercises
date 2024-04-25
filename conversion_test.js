"use strict"

//the variable we are working with
let a = " 101.1 ";
let b = "55";
let c = "402 Stevens";
let d = "Number 5  ";

//using parseInt for each variable displaying the results
console.log("var with a parseInt: " + parseInt(a) +"," + parseInt(b) +"," + parseInt(c) +"," + parseInt(d))
//using parseFloat for each variable displaying the results
console.log("var with a parseFloat: " + parseFloat(a) +"," + parseFloat(b) +"," + parseFloat(c) +"," + parseFloat(d) ) 
//using Number for each variable displaying the results
console.log("var with a Number: " + Number(a) +"," + Number(b) +"," + Number(c) +"," + Number(d))
//using unary for each variable displaying the results
console.log("var with a unary: " + (+a) +"," +  (+b) +"," + (+c) +"," + (+d))
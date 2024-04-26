"use strict"

//create a variable for the current hour
let currentHour = 20;
let greeting = "";

//create and if/else statement to figure out 
//before 10am: good morning ;  after 10am but before 5: good afternoon; after 5: good evening

if(currentHour <=10){
    greeting = "good morning"
}
else if(currentHour < 17){
    greeting = "good day"
}
else {
    greeting = "good evening"
}

console.log( greeting)
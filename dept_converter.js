"use strict"

//create a variable to hold the department name
let deptartmentName = ""

switch (25) {
    case 1:
        deptartmentName = "Marketing";
        break;

    case 5:
        deptartmentName = "Human resoucres";
        break;

    case 10:
        deptartmentName = "Accounting";
        break

    case 12:
        deptartmentName = "Legal";
        break;

    case 18:
        deptartmentName = "IT";
        break;

    case 20:
        deptartmentName = "Customer Relations"
        break;
    default:
        deptartmentName = "We have no idea"
}

console.log(`The department is: ${deptartmentName}`)
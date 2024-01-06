// Variables
// stores strings, number , true , false, undefined, null , arrays, objects , NaN

// Strings
let firstName = "Pellumb";
console.log(firstName, 'This is first name');

let myAge = "30";

// Numbers
let age = 30;
console.log(age, 'this is my age');

// undefined
let undefinedValue = undefined;

// we decalred but not inicialized
var lastName;
console.log(lastName);
// here we inicialized, we reused the variable
lastName = "Rashica";
console.log(lastName);


// underscore way
let first_name = "Pellumb";
console.log(first_name, 'this is underscore way');

// lowercase way
var score = 20;
console.log(score, 'this is lowercase way');

// booleans 
let canView = true;

if (canView == true) {
    console.log('you can view the page');
} else {
    console.log('you can not view the page');
}

// Null
let scoreGame = null;

// Class - Test
firstName = "Pellumb";
lastName = "Rashica";
age = 18;
var state = "Kosovo"
var city = "Vushtrri";
var phoneNumber = "+38345967554";
var birthDay = "05/02/2005";
var idNumber = 100700201;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(state);
console.log(city);
console.log(phoneNumber);
console.log(birthDay);
console.log(idNumber);

// Condition if we have firstName and idNumber put you can register
if (firstName && idNumber) {
    console.log("you can register");
} else {
    console.log("you can not register");
}

if ((firstName && lastName) || idNumber) {
    document.write("You are allowed to register");
} else {
    document.write("You are not allowed to register");
}
// Length of strings
let firstName = "Pellumb";
console.log(firstName.length);

// sum of strings, first way
let lastName = "Rashica";
console.log(firstName + " " + lastName);

// sum of strings , best way
console.log(`${firstName} ${lastName}`);

// task in class 
let city = "Vushtrria";
console.log("une jam" + firstName + " " + lastName + " " + "dhe jam nga" + " " + city);


console.log(`une jam ${firstName} ${lastName} dhe jam nga ${city}`, 'menyra me e leht');

// CharAt
let charAtString = "hello world";
console.log(charAtString.charAt(6));

// indexOf
let indexOfString = 'hello';
console.log(indexOfString.indexOf('l'));

// concat strings
let firstStringConcat = "hello";
let secondStringConcat = "world";
console.log(firstStringConcat.concat(" " + secondStringConcat));

// includes
let inculdeString = "hello world";
console.log(inculdeString.includes('w'));

// lowercase
let lowerCase = "HELLO";
console.log(lowerCase.toLowerCase());

// includes css into js
// document.write("<p style='color: red;'>Hello</p>");

// repeat
let repeatString = "hello";
let whiteSpace = " ";
let concatStrings = repeatString.concat(whiteSpace);

console.log(concatStrings.repeat(3));

// replace
let replaceString = "hello there";
console.log(replaceString);
console.log(replaceString.replace("world", "there"));

// slice
let sliceString = "character";
console.log(sliceString.slice(2));
console.log(sliceString.slice(2, 6));
console.log(sliceString);

// trim , remove empty spaces
let trimString = "  hello  ";
console.log(trimString.trim());

let trimStartString = "  hello  ";
console.log(trimString.trimStart());

let trimEndString = "  hello  ";
console.log(trimString.trimEnd());

// regex it's an rule that we write in JavaScript for inputs to validate them.

// match,regex
let matchRegex = "the rain in spain stays mainly in the plain";
console.log(matchRegex.match(/ain/g));

// TASK TWO
let userEmail = "pllumi@gmail.com";
if (userEmail.slice(6, 16) == "@gmail.com") {
    console.log("You put the correct email");
} else {
    console.log("You didn't put the correct email");
}

let emailWithoutSpace = "pellumbrashica@gmail.com ";
if(emailWithoutSpace.includes(" ")) {
    console.log(emailWithoutSpace.trimEnd());
} else {
    console.log("you have an white space somewhere");
}

let password = "Pllumi123";
if(password.match(/P/g)) {
    console.log("You are logged in");
} else {
    console.log("This user doesn't exist");
}
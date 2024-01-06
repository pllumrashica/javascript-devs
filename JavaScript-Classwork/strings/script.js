// sum of strings
let stringOne = "hello";
let stringTwo = "world";
console.log(stringOne + " " + stringTwo);

// length of string
let lengthString = "hello here";
console.log(lengthString.length);

// task one 
// let firstName = "Pellumb";
// if(firstName.length < 2) {
//     console.log("this is invalid");
// } else {
//     console.log("this is correct");
// }


// char at,find character un specific position
let firstConcatString = "Pellumb";
let secondConcatString = "Rashica";
console.log(firstConcatString);
console.log(secondConcatString);
console.log(firstConcatString.concat(" " + secondConcatString));  // this add two variables within one


// Task Two
let firstName = "Pellumb";
let lastName = "Rashica";
let age = "18";
let city = "Vushtrri";
let country = "Kosova";
// console.log("Une jam" + " " + firstName + " " + lastName + " " + "i kam" + " " + age + " " + "dhe jetoj ne " + city);
console.log(`une jam ${firstName} ${lastName} dhe i kam ${age} dhe jetoj ne ${city},${country}`);

// includes
let includeString = "hello world";
console.log(includeString.includes("hello"));

// indexOf
let indexOfString = "hello world";
console.log(indexOfString.indexOf("o"));

// per te gjitha metoda qe i mesuam te behen detyra
// me condition (if else)

// uppercase to lowercase
let lowerCaseString = "HELLO WORLD";
console.log(lowerCaseString.toLowerCase());

// trim,removes all white spaces
let removeAll = "   hello   ";
console.log(removeAll, "with spaces");
console.log(removeAll.trim(), "without spaces");

// trimStart, removes whites spaces at start of string
let removeStart = " hello   ";
console.log(removeStart.trimStart(), "remove the first spaces");

// repeat
let repeatString = "hello";
console.log(repeatString.repeat(10));

// replace , replace strings
let replaceString = "hello world";
console.log(replaceString);
console.log(replaceString.replace("world", "there"));

// i kemi 5 fjali me document.write
// per te gjitha metodat e stringut te krijohen kushte te cilat duhet te shfaqen ne HTML.
// per te gith keta shembuj te ilustrohen me ngjyra te ndryshme
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
document.write("<p style='color: red;'>Hello</p>")
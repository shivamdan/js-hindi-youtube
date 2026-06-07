const score = 400
// console.log(score)
// Now, in a variable, we can put value with specifying the datatype also
const balance = new Number(100)// here we specify that entered value is a number object
// console.log(balance);

// console.log(balance.toString());// converts value in balance to string datatype
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // This sets number of decimal places required in the number
//toPrecision() method : it takes a number argument, for ex : 2 . Then, the variable which calls this method, the number in that variable will be rounded of to 2 places from the left . For ex : 1128 is the num, and the argument is 3, then , it will give me 1130 as rounded off num. Another ex : num = 1.383, and argument is 2, then the resulting number will be : 1.4
const precisionNum = 123.896
// console.log(precisionNum.toPrecision(3))// This will round off number to 3 digits from left

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));// toLocaleString method is the method, where it converts a number to a string wherein it also put commas to format the number system.
// By default it is in the us system where after every 3 zeroes there is a comma, but, as you can see in the above , if explicitly mentioned in the argument, like here, it is mentioned to be in the indian system, then , it would be in Indian Decimal system format

// ==================================Math Library===================================
// To see how many methods are there in the Math library, either go to MDN docs, or go to a new tab in any browser -> inspect -> console -> Type 'Math' -> all methods will be shown
console.log(Math)
console.log(Math.abs(-4)) // Gives the absolute value of a number
console.log(Math.round(4.67))// rounds to the nearest integer
console.log(Math.floor(4.7)) // Gives the integer part of the number
console.log(Math.ceil(4.2)) // GIves the next greater integer
console.log(Math.min(1,2,3,0,-1))// returns minimum of all the real numbers passed in the arguments
console.log(Math.max(7,2,5,9.9,0))// returns the max of all the real numbers passed in the arguments
console.log(Math.random());// generates a random real number between 0 and 1
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1)

const min = 10;
const max = 30;
// A simple way to get a random number between 2 user defined numbers
console.log(Math.random()*(max-min)+min);
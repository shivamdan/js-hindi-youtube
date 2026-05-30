// let score = 33;

// // The actual primitive data types are written in lowercase 
// // But when converting it to a datatype, an Uppercase of that datatype is used, inside which the variable value to be converted is passed as argument.

// //Example : converting from a string to a number 
// score = "33" // String
// let valueInNumber = Number(score)

// // 2 ways to write typeof method
// console.log(typeof score)// This will give string
// console.log(typeof(valueInNumber)) // This will give number

// //Now suppose the value of variable string score is such that it shouldn't be converted to a number, as such number won't exist
// //Ex:-
// score = "Hi33" // This string shouldn't be explicitly typecasted, as its number doesn't exist
// //But, when it's converted to number, it get's type gets converted to number but its value becomes NaN (Not a number)
// valueInNumber = Number(score)
// console.log("The data type of this converted string : "+typeof(valueInNumber));
// console.log(valueInNumber) // Here is the value in it : NaN

// // Now another case like this : If the datatype of the variable is null, when it's converted to number data type, it becomes 0
// //Example : 
// score = null;
// valueInNumber = Number(score);
// console.log(valueInNumber);

// //Now, if the value of the variable is undefined, then, when it's explicitly typecasted, it gets converted to number data type, but, its value becomes NaN
// score = undefined
// valueInNumber = Number(score)
// console.log(valueInNumber)

// //If variable value is boolean, then after conversion into number data type, true will convert to value 1, and false will convert to value 0
// score = false
// valueInNumber = Number(score)
// console.log(valueInNumber);

// score = true
// valueInNumber = Number(score)
// console.log(valueInNumber)

// Converting from number to boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn); //converting 1 or any integer except 0 => true
console.log(booleanIsLoggedIn) // will print true in console here, as the number was 1

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn); // 0 => false
console.log(booleanIsLoggedIn) // will print false here

isLoggedIn = 3
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

isLoggedIn = -4
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

isLoggedIn = "shivam" // Non-empty string
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // will print true

isLoggedIn = "" // empty string
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // will print false

// any datatype to String data type conversion
let someNum = 33
let stringNumber = String(someNum)
console.log(stringNumber);
console.log(typeof stringNumber) // number has become string
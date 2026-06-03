// In JS, there are only 2 main categories of datatypes, primitive and non-primitive

// Primitive :-
// 7 datatypes in this category : String, number, boolean, null, undefined, symbol, BigInt

//symbol data type makes the values unique.
// Even if two variables have the same values, but are of Symbol datatype, then, they are not considered to be completely equal , i.e., === on the 2 variables will give fals

const score = 100
const scoreValue = 100.8
const isLoggedIn = false
const outsideTemp = null
let userEmail; // By default it will be of undefined value, if no value assigned before

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId); // comparing the two Symbol datatype variables

const bigNumber = 123456789123456789n // to indicate this value as bigInt, add n at end

// Reference Data type :-
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // this is Array Example
let myObj = {
    name: "Shivam",
    age: 23,
} // This is Object example, it's always written in curly braces

// Javascript is a dynamically typed language, i.e., no need to declare the datatypes of a variable in js

// Declaring a function in JS and assigning it to a variable
const myFunction = function(){
    console.log("Hello World");
}

// typeof function in js is used to get the datatype of a variable
// Here, if a variable is not declared, then the typeof method returns "undefined" for it
console.log(typeof hello); // "hello" variable is not declared, so it's type is declared undefined right now
// Also, the typeof function returns object as the datatype of a variable having null value
console.log(typeof heros); // heros is an array, which is of type of object
console.log(typeof myFunction); // the variable containing a function is of type "function" which comes under the umbrella of objects only

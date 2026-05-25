// "use strict", when I type this phrase written in double quotes on top of a js file then it uses the syntax of modern javascript.

//alert(3+3) This alert method belongs to the browser environment , and hence it won't work here in node environment. If we try to use this alert here, it will throw error

// Code should be simple and readable
//Example :-
console.log(3+3); console.log("Shivam") // Here, both print statements are written in the same line, they should be written in different lines as a proper coding practice

//ECMA Script organization defines the standards in the JS language. Link : tc39.es/ecma262

// Various data types in js
let name = "Shivam"; // String data type
let age = 22 // number data type
let isLoggedIn = false; // boolean data type
let value;

// Number => 2^53 on both +ve and -ve sides
// bigInt => For numbers larger than "Number" range
// string => "" or ''
// boolean => true or false
// null => it's a standalone value(Empty value)
// undefined => it means the value is not defined. If a variable is not initialized, then, it's value is undefined by default. undefined is of type undefined
// symbol => unique
// When we see the type of null , then it comes out to be an object type

// Object : Non-primitive data types

//to know the type of
console.log(typeof age);
console.log(typeof null);
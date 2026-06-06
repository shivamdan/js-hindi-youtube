const name = "Shivam"
const repoCount = 10

// Two ways to write combined strings including variable values in between
//1st : using + operator
console.log(name+repoCount+" Value");

//2nd : using `` backticks, we can put the variable directly inside a string
// This concept is called String interpolation, and is used more than the 1st method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// creating String object in heap memory
const gameName = new String("Shivam");
console.log(gameName[0])// gives 1st character of string

console.log(gameName.__proto__);
// This gives String.prototype, i.e., it's an object that contains methods shared by all String objects (methods of String)
// It will give output as : {}
// This means, it is an expandable object, and contains all the methods that can be accessed by a STring object

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)) // Character at 2nd index of string
// Normally a number should be given as input as argument to charAt() method, but, if other datatype value is passed, then, charAt() implicitly tries to convert it to number and then work on it, below are the conversions take place, when non-numeric datatype is passed
const s = "Shivam";
s.charAt('t')   // 't' -> NaN -> treated as 0 ->gives output-> "S"
s.charAt('2')   // '2' -> 2 ->gives output-> "i"
s.charAt('')    // '' -> 0 ->gives output-> "S"
s.charAt(true)  // true -> 1 ->gives output-> "h"
s.charAt(100)   // out of range ->gives output-> ""

const str = "little"
console.log(str.indexOf('t')) // indexOf() method gives the index of the first occurrence of the character passed as argument
const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-1,4); // negative value means iterate from reverse side of string
console.log(anotherString)

const newStringOne = "    Shivam  "
console.log(newStringOne)
console.log(newStringOne.trim()) // Trims trailing and leading spaces in a string
console.log(newStringOne.trimStart())// Trims leading spaces of a string
console.log(newStringOne.trimEnd()) // Trims trailing spaces of a string

const url = "htpphtpsi"
console.log(url.replace('ht','de')) // This replaces the first occurrence of the substring mentioned in the first argument of replace method with the string in second argument
console.log(url.replaceAll('ht','de')) // Replaces all occurrences of the 1st argument of replaceAll method in string url with the second argument
console.log(url.includes("ht")) // If the string includes the substring passed as argument to includes() method, then it returns true, otherwise false

const string = "hello_shivam_dan"
console.log(string.split("_"))// splits based on mentioned seperator and returns an array of the splitted substrings
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
// to run a js file using node , type this command in terminal : node "filename"

const accountId = 144553
let accountEmail = "shivam@gmail.com"
var accountPassword = "12345"
// If any keyword is not written before a variable , then by default that variable is of "var" type
accountCity = "Jaipur"
let accountState; // If a value is not assigned to a "let" variable, then, it is undefined as by default
// accountId = 2 . Here, a const variable is constant, and its value can't be changed 
// JavaScript has ASI (Automatic Semicolon Insertion), but should be used only with variable declaration . At every other block or method, semicolon writing practice must be there
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

// the below table is used to print multiple variable names and values in a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

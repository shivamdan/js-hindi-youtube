// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// The above all the comparision operations will result in boolean result

// console.log(null > 0) // This will first convert null to a number type to compare with 0 on the RHS (i.e. 0) then it's boolean value turns out to be false, as 0 is not greater than 0

// console.log(null == 0) // This will give as false
// console.log(null >= 0) // THis will give as true

/* Note :-
The reason is that an equality check == and comparisions >, <, >=, <= work differently

Comparisions convert null to a number,i.e. into 0, and then do the comparision
== doesn't convert null to any other datatype, just compares if they are same or not
 */
// Now checking for undefined
// console.log(undefined == 0) // will give false
// console.log(undefined >= 0) // will give also
// console.log(undefined <= 0) // will give also

// === operator : this checks the value without conversion, that means, first it checks whether the 2 values have the same datatype, then it goes for the actual value
console.log("2"===2);

// NOTE : Avoid doing messy conversions, and always try to write clean code
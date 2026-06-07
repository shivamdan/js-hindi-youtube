// To learn Date datatype. Date object is a very old object , and in this many conversion issues are there, including different timezones behaviour issue, and other issues. To solve this, a new Datatype named as Temporal is being created to solve this .

// But, here we'll learn Date datatypes
let myDate = new Date();// This will create date object which will give the exact moment of the date and time, if we don't pass any argument to it's constructor
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toLocaleString());
console.log(myDate.toDateString())
console.log(typeof myDate)

// in Date, month starts from 0
// let myCreatedDate = new Date(2023, 0, 13)
// console.log(myCreatedDate) // This will give both the date and time, since we didn't entered time, by default hour, minute and second are 0 in that
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 13, 5, 3, 45)// Here, entered the time as well
// console.log(myCreatedDate.toLocaleDateString()) // this gives date in M/D/YYYY format
// console.log(myCreatedDate.toLocaleString())

// another format to create Date 
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

//Another syntax
let myCreatedDate = new Date("01-04-23") // mm/dd/yy
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // This gives me the total milliseconds since 1st Jan 1970 till now(at the instance this object's method is called)

console.log(myCreatedDate.getTime()) // This will give me milliseconds from 00:00:00 am of 1st Jan 1970 to 00:00:00 am of 4th Jan 2023

// To get seconds out of milliseconds, divide by 1000 and then floor the value to remove decimals
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// Now we can also extract different components of the Date seperately
console.log(newDate.getMonth()) // Month starts from 0 as Jan
console.log(newDate.getDay()) // Day starts with 0 from Sunday as first day of week
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())

// `${newDate.getDay()} and the time `

// We can customize the way the date and time are visible in the console as shown below
newDate.toLocaleString('default',{
    weekday: "long",
    
})
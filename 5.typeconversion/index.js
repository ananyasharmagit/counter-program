// change datatype value to another
let num = 5;
// when we accept user input it is always a string so we need to convert it to number
num = Number(num); // this will convert the string to number
console.log(num + 5); // this will output 10
// after that check the datatype of the variable
console.log(typeof num); // this will output number
// however if we try to convert a string that is not a number it will return NaN
let str = "hello";
str = Number(str); // this will convert the string to number
console.log(str); // this will output NaN
// after that check the datatype of the variable
console.log(typeof str); // this will output number
// boolean will return true if assigned a value and false if not assigned a value

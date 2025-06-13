// let myString = 'hello world';
// if (myString.length > 0) {
//     console.log('The length of the string is: ' + myString.length);
// } else {
//     console.log('The string is empty');
// }

// there is no problem

let myString = "hello world";
if (myString.length > 0) {
  console.log("The length of the string is: " + myString.length);
} else {
  console.log("The string is empty");
}
let myNumber = parseInt(myString); //parseInt() only returns the integer part of the number, discarding any fractional part.
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The value is not a number");
}

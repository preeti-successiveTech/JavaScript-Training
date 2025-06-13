// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// The Problem : 
// 1. we didn't declare property variable which is not a good pratice
// 2. when we have to access object value through a variable which hold the key, we have to use a [] notation rather that . notation.

let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
}
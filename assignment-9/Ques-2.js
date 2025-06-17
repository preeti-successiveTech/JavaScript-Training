// 2.Install the lodash package using npm install lodash. and use any of its function

const lodash = require("lodash");
const arr = [1, 2, 3, 4, 5];
const newArr = lodash.chunk(arr, 2); // creates chunk of size 2
console.log(newArr);
console.log(arr);

const concatArray = lodash.concat(arr, 2, " ", false, 23); // add these values to the array.
console.log(arr);

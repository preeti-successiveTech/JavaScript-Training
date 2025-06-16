// 2. Give an example of using multiple callback functions in a single function in JavaScript

function multiCallbackFunction(fn1callback, fn2callback, fn3callback) {
  fn1callback(fn2callback(fn3callback()));

  console.log("Hello World");
}
const fn1 = function () {
  console.log("Function 1 callback");
};
const fn2 = function () {
  console.log("Function 2 callback");
};
const fn3 = function () {
  console.log("Function 3 callback");
};
multiCallbackFunction(fn1, fn2, fn3);

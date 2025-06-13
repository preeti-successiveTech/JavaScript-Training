// 11. var promise = new Promise(function(resolve, reject) {
//    setTimeout(function() { resolve("Data received"); }, 1000);
// });
// promise.then(function(data) {
//    console.log(data);
// }, function(error) {
//    console.log(error);
// });


// there is no error, it will work perfectly but it is better to use .then block followed by .catch block
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data received");
  }, 1000);
});
promise.then(
  function (data) {
    console.log(data);
  },
  function (error) {
    console.log(error);
  }
);

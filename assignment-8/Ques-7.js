// 3. for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }


// var make the i global so when we run the log it change the value of i through refernece so
//  use let which is block scope, when we use it it will initialize the new location every time.

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
 console.log(i);
  }, 1000);
}

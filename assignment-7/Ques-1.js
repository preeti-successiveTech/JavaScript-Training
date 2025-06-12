// 1. Give an example of using a callback function to handle an asynchronous
//  operation in JavaScript (Use any open api to make a call)

function callbackFunction(callback) {
  url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data));
}
function display(data) {
  console.log(data);
}
callbackFunction(display);

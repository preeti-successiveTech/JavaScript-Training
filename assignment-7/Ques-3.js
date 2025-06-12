// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback)
// { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hiii");
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => resolve(data));
    }, 1000);
  });
}

fetchData().then((data) => console.log(data));

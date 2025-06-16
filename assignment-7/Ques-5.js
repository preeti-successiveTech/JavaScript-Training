// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a
// specified order, with a specified concurrency limit
let max = 5;
let queue = [];
const functionPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
          queue.push(data);
          return resolve(data);
        });
    }, 2000);
  });
};

const functionConcurrencyLimit = async () => {
  console.log("Task Queue");
  if (queue.length < max) {
    console.log(queue.length);
    const res = await functionPromise();
    console.log(res);
    console.log(queue.length);
    queue.shift();
  } else {
    console.log("Queue is full");
  }
};
functionConcurrencyLimit();
functionConcurrencyLimit();

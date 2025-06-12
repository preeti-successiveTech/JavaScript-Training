// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

let rate = 3; //global variable
const functionPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
          rate++;
          return response.json();
        })
        .then((data) => resolve(data));
    }, 2000);
  });
};
const functionRateLimiter = async () => {
  console.log("Checking the server");
  let i = 1;
  while (rate > 0 && rate < 6 && i <= 5) {
    rate--;
    const res = await functionPromise();
    rate--;
    const res2 = await functionPromise();
    console.log(rate);
    console.log(res);
    console.log("Yes");
    i++;
  }
};

functionRateLimiter();

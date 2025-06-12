// 8. Create a function that fetches data from multiple APIs in parallel and then
// performs some operation on the combined data, using async/await.

function fetchDataFromMultiApi() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => resolve(data));
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((response) => response.json())
        .then((data) => resolve(data));
    }, 3000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/3")
        .then((response) => response.json())
        .then((data) => resolve(data));
    }, 1000);
  });

  return [promise1, promise2, promise3];
}
async function performOperation() {
  try {
    console.log("hii");
    const res1 = fetchDataFromMultiApi();
    const result = await Promise.all(res1);
    console.log(result[0].id);
    console.log(result[1].id);
    console.log(result[2].id);
    const obj = { ...result[0] };
    for (let i in obj) {
      obj[i] += result[1][i] + result[2][i];
    }
    console.log(obj);
  } catch (error) {
    console.log("error");
  }
}

performOperation();

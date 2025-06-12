// 7. Create a function that performs multiple asynchronous operations in parallel using
// async/await and waits for all of them to complete before returning the results.

const function1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1) resolve("First promise");
      else reject("first reject");
    }, 4000);
  });
};
const function2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (0) resolve("Second promise");
      else {
        reject("Second rejected");
      }
    }, 6000);
  });
};
async function multipleAsyncOperation() {
  try {
    console.log("hiii");
    const result1 = function1();
    const result2 = function2();
    const result = await Promise.allSettled([result1, result2]);
    console.log(result);
  } catch (err) {
    console.log("error");
  }
}
multipleAsyncOperation();

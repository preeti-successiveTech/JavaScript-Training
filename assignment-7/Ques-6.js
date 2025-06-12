// 6. Implement a function that returns a resolved Promise after a specified
// delay using async/await.

function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 2000);
  });
}
async function asyncCall() {
  try {
    console.log("calling");
    const res = await resolvedPromise();
    console.log(res);
    console.log("end");
  } catch (err) {
    console.log("Error");
  }
}
asyncCall();

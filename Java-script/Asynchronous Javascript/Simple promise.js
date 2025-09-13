const simplePromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved ✅");
  } else {
    reject("Promise rejected ❌");
  }
});
simplePromise.then(res => console.log(res)).catch(err => console.error(err));

console.log("Start");

setTimeout(() => {
  console.log("⏱ Timer finished");
}, 0);

Promise.resolve("✅ Promise resolved").then(res => console.log(res));

console.log("End");

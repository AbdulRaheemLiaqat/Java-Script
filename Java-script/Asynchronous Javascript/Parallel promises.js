const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const p2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

Promise.all([p1, p2])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => console.log("Parallel results:", data));

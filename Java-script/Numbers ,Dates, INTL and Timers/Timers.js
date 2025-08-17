setTimeout(() => console.log("⏰ Your pizza is ready!"), 3000);
console.log("Waiting for pizza...");
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString()); 
}, 1000);

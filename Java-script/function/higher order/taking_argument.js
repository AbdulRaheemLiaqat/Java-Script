function greet(name) {
  console.log(`Hello, ${name}!`);
}
function processUser(name, callback) {
  callback(name);
}
processUser('Abdullah', greet); 
// Hello, Abdullah!
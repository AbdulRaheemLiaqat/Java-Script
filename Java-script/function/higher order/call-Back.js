function greet(name) {
  console.log(`Hello, ${name}!`);
}
function processUserInput(callback) {
  const name = prompt('Please enter your name:');
  callback(name); // Calls the passed-in function
}
processUserInput(greet);
// Store function in a variable
const greet = function () {
  console.log('Hello!');
};
// Pass function as argument
function run(fn) {
  fn(); // Call the function
}
run(greet); // Hello!
// Return a function from another function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
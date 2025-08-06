function outer() {
  let counter = 0;
  return function() {
    counter++;
    console.log(`Counter: ${counter}`);
  };
}
const increment = outer();
increment(); // Counter: 1
increment(); // Counter: 2
increment(); // Counter: 3
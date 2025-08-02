function greetUser(callback) {
  callback();
}
greetUser(function () {
  console.log('Hello from callback!');
});
// Hello from callback!
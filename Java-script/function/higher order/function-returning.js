function greet(language) {
  return function(name) {
    console.log(`Hello ${name}, welcome to ${language}!`);
  };
}
const greetInJS = greet('JavaScript');
greetInJS('Abdullah'); // Hello Abdullah, welcome to JavaScript!
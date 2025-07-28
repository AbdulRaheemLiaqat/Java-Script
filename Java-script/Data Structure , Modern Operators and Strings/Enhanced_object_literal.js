const name = "Ali";
const age = 25;
const user = {
  name,
  age,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
user.greet(); // Hello, I'm Ali
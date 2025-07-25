function greet() {
  console.log(this.name);
}
const user = { name: "Abdullah" };
greet.call(user);  // "Abdullah"
greet.apply(user); // "Abdullah"
const boundGreet = greet.bind(user);
boundGreet();      // "Abdullah"
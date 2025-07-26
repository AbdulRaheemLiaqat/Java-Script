const person = {
  name: "Abdullah",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Output: Hello, undefined
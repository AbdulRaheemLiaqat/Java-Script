const person = {
  name: "Abdullah",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Output: Hello, Abdullah
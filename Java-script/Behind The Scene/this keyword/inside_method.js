const person = {
  name: "Abdullah",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // "Abdullah" — this refers to 'person'
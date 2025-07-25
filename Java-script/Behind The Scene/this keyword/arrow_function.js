const obj = {
  name: "Abdullah",
  greet: () => {
    console.log(this.name);
  },
};
obj.greet(); // undefined (because 'this' refers to global, not obj)
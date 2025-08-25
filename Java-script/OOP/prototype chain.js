const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};
const dog = {
  bark() {
    console.log("Woof!");
  }
};
dog.__proto__ = animal;
console.log(dog.eats);  
dog.walk();            
dog.bark();            
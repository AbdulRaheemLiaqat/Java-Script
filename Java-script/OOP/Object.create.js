const CarProto = {
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  },
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  }
};
const bmw = Object.create(CarProto);
bmw.init('BMW', 120);
bmw.accelerate();

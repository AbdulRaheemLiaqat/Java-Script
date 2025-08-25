function Car(make, speed) {
  this.make = make;
  this.speed = speed; // km/h
}
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make + " is going at " + this.speed + " km/h");
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make + " is going at " + this.speed + " km/h");
};
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
car1.accelerate();
car1.accelerate(); 
car1.brake();    
car2.accelerate(); 
car2.brake();    
car2.brake();     
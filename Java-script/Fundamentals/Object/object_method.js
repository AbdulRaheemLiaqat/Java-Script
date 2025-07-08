myCountry.describe = function () {
  console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
};
myCountry.describe();
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
};
myCountry.checkIsland();
console.log(myCountry.isIsland);
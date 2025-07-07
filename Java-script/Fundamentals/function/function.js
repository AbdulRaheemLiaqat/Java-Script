function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const country1 = describeCountry("Pakistan", 240, "Islamabad");
const country2 = describeCountry("Turkey", 85, "Ankara");
const country3 = describeCountry("Finland", 6, "Helsinki");
console.log(country1);
console.log(country2);
console.log(country3);
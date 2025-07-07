function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(1)}% of the world.`;
}
console.log(describePopulation("Pakistan", 240));
console.log(describePopulation("Turkey", 85));
console.log(describePopulation("Finland", 6));
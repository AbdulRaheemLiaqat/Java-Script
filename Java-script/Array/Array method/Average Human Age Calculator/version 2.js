const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
const result = [5, 2, 4, 1, 15, 8, 3]
  .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((sum, age, _, arr) => sum + age / arr.length, 0);
console.log(result);
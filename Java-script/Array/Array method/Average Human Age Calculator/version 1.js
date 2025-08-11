function calcAverageHumanAge(ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  return adults.reduce((sum, age) => sum + age, 0) / adults.length;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
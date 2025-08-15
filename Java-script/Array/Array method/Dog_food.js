'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Abdullah', 'Hamza'] },
  { weight: 8, curFood: 200, owners: ['Maheen'] },
  { weight: 13, curFood: 275, owners: ['Ihsan', 'Abdullah'] },
  { weight: 32, curFood: 340, owners: ['Hamza'] },
];
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
const ihsansDog = dogs.find(dog => dog.owners.includes('Ihsan'));
console.log(
  `Ihsan's dog is eating ${
    ihsansDog.curFood > ihsansDog.recommendedFood ? 'too much' : 'too little'
  }`
);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);

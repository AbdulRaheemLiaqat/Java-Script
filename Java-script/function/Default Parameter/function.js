function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
function rollDice(sides = randomNumber()) {
  console.log(`Rolling a ${sides}-sided dice...`);
}
rollDice();   // Random between 1 and 10
rollDice(6);  // Rolling a 6-sided dice...s
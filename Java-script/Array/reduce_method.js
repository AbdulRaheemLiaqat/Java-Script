const movements = [200, -100, 340, -300, 50, 400, -460];
const balance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance); 
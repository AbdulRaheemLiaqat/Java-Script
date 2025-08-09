const movements = [200, -100, 340, -300, 50, 400, -460];
const deposits = movements.filter(mov => mov > 0); // filter
const depositUSD = deposits.map(mov => mov * 1.1); // map
const totalDeposits = depositUSD.reduce((acc, mov) => acc + mov, 0); // reduce
console.log(deposits, depositUSD, totalDeposits);
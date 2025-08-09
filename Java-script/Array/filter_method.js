const movements = [200, -100, 340, -300, 50, 400, -460];
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); 
movements.forEach((movement, i) =>
  console.log(`Movement ${i + 1}: ${movement > 0 ? 'Deposit' : 'Withdrawal'} of ${Math.abs(movement)}`)
);
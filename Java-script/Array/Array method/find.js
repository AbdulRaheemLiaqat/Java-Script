const accounts = [
  { owner: 'Abdullah', balance: 1600 },
  { owner: 'Maheen', balance: 1500 },
  { owner: 'Hamza', balance: 2000 }
];
const account = accounts.find(acc => acc.owner === 'Maheen');
console.log(account);
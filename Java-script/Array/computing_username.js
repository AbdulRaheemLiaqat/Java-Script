const accounts = [
  { owner: 'Abdullah' },
  { owner: 'Hamza' },
  { owner: 'Maheen' }
];
accounts.forEach(acc => {
  acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
});
console.log(accounts);
let accounts = [
  { user: 'Abdullah', balance: 500 },
  { user: 'Maheen', balance: 1500 }
];
function transfer(from, to, amount) {
  const sender = accounts.find(a => a.user === from);
  const receiver = accounts.find(a => a.user === to);
  if (sender && receiver && sender.balance >= amount) {
    sender.balance -= amount;
    receiver.balance += amount;
    console.log(`Transferred ${amount} from ${from} to ${to}`);
  } else {
    console.log('Transfer failed');
  }
}
transfer('Maheen', 'Abdullah', 300);
console.log(accounts);
const accounts = [
  { user: 'Abdullah', pin: 1111 },
  { user: 'Maheen', pin: 2222 }
];
function login(user, pin) {
  const acc = accounts.find(a => a.user === user && a.pin === pin);
  return acc ? 'Login successful' : 'Invalid credentials';
}
console.log(login('Maheen', 2222));
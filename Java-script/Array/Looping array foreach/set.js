const currenciesUnique = new Set(['USD', 'EUR', 'PKR', 'USD', 'PKR']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});

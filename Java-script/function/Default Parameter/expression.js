function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}
console.log(calculatePrice(100)); // 110 (tax = 10)
console.log(calculatePrice(200)); // 220 (tax = 20)
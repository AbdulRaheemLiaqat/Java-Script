function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const triple = multiplier(3);
console.log(triple(4)); // 12
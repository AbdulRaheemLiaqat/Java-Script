const getNumber = function (num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num * 2), 1000);
  });
};

getNumber(2)
  .then(result => {
    console.log(result); // 4
    return getNumber(result);
  })
  .then(result => {
    console.log(result); // 8
    return getNumber(result);
  })
  .then(result => {
    console.log(result); // 16
  });

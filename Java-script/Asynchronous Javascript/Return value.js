async function getNumber() {
  return 42; // async function always returns a Promise
}

getNumber().then(num => console.log("Returned:", num));

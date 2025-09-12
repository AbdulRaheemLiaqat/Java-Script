function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be at least 18!");
  }
  return "Access granted ✅";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.error(err.message); // Age must be at least 18!
}

// Global scope
let a = "I'm global";

function outer() {
  let b = "I'm in outer";

  function inner() {
    let c = "I'm in inner";

    console.log(a); // ✅ Can access global variable
    console.log(b); // ✅ Can access outer function variable
    console.log(c); // ✅ Can access its own variable
  }

  inner();
  // console.log(c); ❌ Error: c is not defined (not in this scope)
}

outer();
// console.log(b); ❌ Error: b is not defined (only inside outer)
// console.log(c); ❌ Error: c is not defined (only inside inner)
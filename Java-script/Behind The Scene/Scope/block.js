function testBlock() {
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x); // ✅
    console.log(y); // ✅
  }
  // console.log(x); ❌ Error
  // console.log(y); ❌ Error
}
testBlock();
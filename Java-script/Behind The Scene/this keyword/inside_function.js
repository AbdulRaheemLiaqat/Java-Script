function show() {
  console.log(this);
}
show(); // In non-strict mode: global (Window), in strict mode: undefined
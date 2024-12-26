function foo(x) {
  if (x < 0) {
    throw new Error("Input must be a non-negative integer.");
  } else if (x == 0) {
    return false; //Added base case for x = 0
  } else if (x == 1) {
    return true;
  } else if (x == 2) {
    return false;
  } else {
    return foo(x - 2);
  }
}
console.log(foo(3)); // Output: true
console.log(foo(4)); // Output: false
console.log(foo(5)); // Output: true
console.log(foo(0)); // Output: false
console.log(foo(-1)); // throws Error
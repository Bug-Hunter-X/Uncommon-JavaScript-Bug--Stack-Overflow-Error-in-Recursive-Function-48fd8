function foo(x){
  if (x == 1) {
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
console.log(foo(0)); // Stack Overflow error!
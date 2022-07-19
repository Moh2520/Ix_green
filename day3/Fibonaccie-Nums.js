
let n = 10

function fibonacci(n) {
    if (n <= 1) {
      return n;
      //This  returns the numbers
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
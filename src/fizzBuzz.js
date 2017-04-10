function fizzBuzz(i) {
  // for (i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      return "fizzbuzz";
    }
    else if (i % 3 == 0) {
      return "fizz";
    }
    else if (i % 5 == 0) {
      return "buzz";
    }
    else {
      return i;
    }
  // }
}

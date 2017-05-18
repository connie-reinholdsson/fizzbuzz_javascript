function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
    if (number === 0) {
      return number;
  }  else if (this._isDivisibleBy(15, number)){
      return 'Fizzbuzz';
  } else if (this._isDivisibleBy(5, number)) {
      return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
      return 'Fizz';
  } else {
      return number;
  }
};

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
};

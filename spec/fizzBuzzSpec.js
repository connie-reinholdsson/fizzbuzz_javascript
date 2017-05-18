describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('multiples of both 3 and 5', function() {
    it('fizbuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('Fizzbuzz');
    });
  });

  describe('any other number', function() {
    it('returns number', function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });

  describe('if equal to 0', function() {
    it('returns 0', function() {
      expect(fizzBuzz.play(0)).toEqual(0);
    });
  });

});

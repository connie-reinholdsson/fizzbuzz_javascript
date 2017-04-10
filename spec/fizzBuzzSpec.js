describe("#fizzBuzz", function() {
  it("prints fizz if divisible by 3", function() {
    expect(fizzBuzz(9)).toBe("fizz");
  });
// });

// describe("#fizzBuzz", function() {
  it ("prints fizz if divisible by 5", function() {
    expect(fizzBuzz(10)).toEqual("buzz");
  });

  it ("prints fizzbuzz if divisible by 3 and 5", function () {
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  });
});

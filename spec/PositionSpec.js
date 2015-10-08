/* global_ , testData, position */
describe("Position", function() {
  var testData = [1, 3, 5, 6];

  it("returns the position of 5 in [1, 3, 5, 6]", function() {
    expect(position(testData, 5)).toEqual(2);
  });

  it("returns the position of 2 in [1, 3, 5, 6]", function() {
    expect(position(testData, 2)).toEqual(1);
  });

  it("returns the position of 4 in [1, 3, 5, 6]", function() {
    expect(position(testData, 4)).toEqual(2);
  });

  it("returns the position of 0 in [1, 3, 5, 6]", function() {
    expect(position(testData, 0)).toEqual(0);
  });
});

import getSum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("Square Array", () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it("Odd Numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it("Get Sum", () => {
  const result = getSum(4, 5);
  expect(result).toEqual(9);
});

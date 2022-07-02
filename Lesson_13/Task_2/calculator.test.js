import getSum, { getSquareArray, getOddNumbrs } from "./calculator.js";

it("Square Array", () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it("Odd Numbers", () => {
  const result = getOddNumbrs([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it("Get Sum", () => {
  const result = getSum(4, 5);
  expect(result).toEqual(9);
});

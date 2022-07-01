import { getSquareArray } from "./app.js";

it("jest", () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

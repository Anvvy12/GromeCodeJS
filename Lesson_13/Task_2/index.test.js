import { getSquareArray, getAddNumbers } from "./index.js";

it("square Array", () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEquals([1, 4, 9]);
});

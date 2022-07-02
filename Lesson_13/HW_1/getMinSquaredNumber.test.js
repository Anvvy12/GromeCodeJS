import getSquaredArray from "./getMinSquaredNumber";

it("get squared array", () => {
  const result = getSquaredArray([-1, -3, -4, 5]);
  expect(result).toEqual(1);
});

it("If empty array", () => {
  const result = getSquaredArray([]);
  expect(result).toEqual(null);
});

it("If not arra", () => {
  const result = getSquaredArray("ssfdfsdfdsfds");
  expect(result).toEqual(null);
});

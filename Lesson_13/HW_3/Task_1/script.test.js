import { reverseArray } from "./script";

it("Reverse array ?", () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it("Reverse array ?", () => {
  const result = reverseArray("sssssss");
  expect(result).toEqual(null);
});

it("Reverse array ?", () => {
  const result = reverseArray(undefined);
  expect(result).toEqual(null);
});

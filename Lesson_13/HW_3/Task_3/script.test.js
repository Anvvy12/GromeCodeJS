import { getAdults } from "./script";

it("test V1", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("test V2", () => {
  const result = getAdults({ Marta: 12, Sam: 21, Ben: 18 });
  expect(result).toEqual({ Sam: 21, Ben: 18 });
});
it("test V3", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

import { calc } from "./calculator";

it("Chek input`s type", () => {
  const result = calc(122);
  expect(result).toEqual(null);
});

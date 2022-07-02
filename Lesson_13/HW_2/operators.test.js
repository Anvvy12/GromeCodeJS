import { calc } from "./calculator";

it("Chek calc`s operation", () => {
  const result = calc("6 + 3");
  expect(result).toEqual("6 + 3 = 9");
});
it("Chek calc`s operation v2", () => {
  const result = calc("6 - 3");
  expect(result).toEqual("6 - 3 = 3");
});
it("Chek calc`s operation v3", () => {
  const result = calc("6 * 3");
  expect(result).toEqual("6 * 3 = 18");
});
it("Chek calc`s operation v3", () => {
  const result = calc("6 / 3");
  expect(result).toEqual("6 / 3 = 2");
});

import { withdraw } from "./script";

it("test", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("test v2", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("test v3", () => {
  const result = withdraw(
    ["Ann", "John", "User"],
    [1400, 87, -6],
    "User22",
    10
  );
  expect(result).toEqual(null);
});

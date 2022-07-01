it("17 it`s 17", () => {
  expect(17).toEqual(17);
});
it("18 not a 17", () => {
  expect(18).not.toEqual(17);
});

const gerEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);

it("should only even numbers from array", () => {
  const result = gerEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});

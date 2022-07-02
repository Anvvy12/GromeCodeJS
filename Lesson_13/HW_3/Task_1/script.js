export const reverseArray = (numbers) => {
  if (!Array.isArray(numbers)) return null;
  const [...resultArray] = numbers;
  return resultArray.reverse();
};

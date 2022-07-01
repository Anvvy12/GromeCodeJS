const gerEvenNumbers = (numbers) => {
  const resArr = numbers.filter((num) => num % 2 === 0);
  return resArr;
};

console.log(gerEvenNumbers([1, 2, 3, 4]));

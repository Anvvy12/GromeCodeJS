export default (numbers) => {
  if (!numbers.length || !Array.isArray(numbers)) return null;
  return Math.min(...numbers.map((num) => num ** 2));
};

// const test = (numbers = [-1, -3, -4, 5]) => {
//   return typeof Math.min(...numbers.map((num) => num ** 2));
// };

// console.log(test());

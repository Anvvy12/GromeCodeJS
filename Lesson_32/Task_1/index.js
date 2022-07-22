const getValueWithDelay = (number, time) => {
  const sumPromise = new Promise((resolve, reject) => {
    if (isNaN(number)) {
      reject(new Error("Can't calculate"));
      return;
    }
    setTimeout(() => {
      console.log(number);
      resolve(number);
    }, time);
  });
  return sumPromise;
};

const getSum = (numbersArray) => {
  return numbersArray.reduce((acc, num) => acc + num, 0);
};

export const asyncSum = (...numbers) => {
  return Promise.all(numbers).then((value) => getSum(value));
};

const number1 = getValueWithDelay("a", 1000);
const number2 = getValueWithDelay(15, 2000);
const number3 = getValueWithDelay(5, 3000);
const number4 = getValueWithDelay(3, 2000);

asyncSum(number1, number2, number3, number4)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

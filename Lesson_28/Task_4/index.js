const plusTwo = (value) => value + 2;
const takeTwice = (value) => value * 2;
const minusFive = (value) => value - 2;

export const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const res = compose(plusTwo, takeTwice, minusFive);
console.log(res(1));

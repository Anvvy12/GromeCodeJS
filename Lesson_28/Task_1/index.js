const calc = (number) => {
  let res = number;
  const calculator = {
    add(value) {
      res += value;
      return this;
    },
    subtract(value) {
      res -= value;
      return this;
    },
    mult(value) {
      res *= value;
      return this;
    },
    div(value) {
      res /= value;
      return this;
    },
    result() {
      return res;
    },
  };
  return calculator;
};

// test data
const resu = calc(3).add(2).mult(4).div(10).subtract(5).result(); // -3
console.log(resu);

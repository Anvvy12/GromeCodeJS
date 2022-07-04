const createCalculator = () => {
  let startNum = 0;
  function add(toAdd) {
    return (startNum += toAdd);
  }
  function decrease(toDecrease) {
    return (startNum -= toDecrease);
  }
  function reset() {
    return (startNum = 0);
  }
  function getMemo() {
    return startNum;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

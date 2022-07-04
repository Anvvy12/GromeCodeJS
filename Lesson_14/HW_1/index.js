let startNum = 0;

function add(addNum) {
  startNum += addNum;
  return startNum;
}
function decrease(decreaceNum) {
  startNum -= decreaceNum;
  return startNum;
}

function reset() {
  startNum = 0;
  return startNum;
}

function getMemo(newStartNum) {
  startNum = newStartNum;
  return startNum;
}

add(14);
console.log(startNum);

decrease(4);
console.log(startNum);

reset();
console.log(startNum);

getMemo(80);
console.log(startNum);

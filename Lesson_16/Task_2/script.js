var arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

console.log(arr[0]());

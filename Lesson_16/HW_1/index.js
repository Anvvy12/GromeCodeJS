const createArrayOfFunctions = (LengthOfArray) => {
  const resultFunctionArray = [];
  if (LengthOfArray == null) return resultFunctionArray;
  if (isNaN(LengthOfArray)) return null;

  for (let i = 0; i < LengthOfArray; i += 1) {
    resultFunctionArray[i] = function () {
      return i;
    };
  }
  return resultFunctionArray;
};

// TestData

console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions("s"));
console.log(createArrayOfFunctions(12)[5]());
console.log(createArrayOfFunctions(3)[2]());
console.log(createArrayOfFunctions(1)[0]());

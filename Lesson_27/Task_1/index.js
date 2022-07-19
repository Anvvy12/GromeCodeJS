// localStorage.clear();

// localStorage.setItem("firstName", JSON.stringify("Tom"));
// localStorage.setItem("lastName", JSON.stringify("Hardy"));
// localStorage.setItem("age", JSON.stringify(24));
// localStorage.setItem("isActor", JSON.stringify(true));
// localStorage.setItem("nameOfSon", JSON.stringify(null));
// localStorage.setItem("nameOfMam", JSON.stringify(undefined));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

// console.log(getLocalStorageData());

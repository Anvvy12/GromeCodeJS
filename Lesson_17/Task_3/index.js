function defer(func, ms) {
  return function () {
    setTimeout(() => func(...arguments), ms);
  };
}

const sayHi = () => {
  console.log("Hello");
};
const defferSayHi = defer(sayHi, 1000);
const user = {
  name: "Tom",
  sayHi() {
    console.log(`hi I'am ${this.name}!`);
  },
};

defferSayHi();

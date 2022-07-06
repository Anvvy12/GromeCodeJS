function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const sayHi = () => {
  console.log("Hello");
};

const user = {
  name: "Tom",
  sayHi() {
    console.log(`hi I'am ${this.name}!`);
  },
};
const defferSayHi = defer(user.sayHi, 1000);
defferSayHi();

defferSayHi.call({ name: "Bob" });

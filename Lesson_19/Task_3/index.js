function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.setAge = function (age) {
  this.age = age;
  if (age < 0) {
    console.log("false");
    return false;
  }
  if (age < 25) {
    console.log("age = ", age);
    return age;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return null;
};

const user1 = new User("John", 30);

user1.setAge(2);
user1.sayHi();

/* eslint-disable max-classes-per-file */
class User {
  // put your code here
  #id;
  #name;
  #sessionId;

  constructor(id, name, sessionId) {
    this.#id = id;
    this.#name = name;
    this.#sessionId = sessionId;
  }

  get name() {
    return this.#name;
  }

  get id() {
    return this.#id;
  }
  get sessionId() {
    return this.#sessionId;
  }
}

class UserRepository {
  #users;
  constructor(users) {
    this.#users = users;
    Object.freeze(users);
  }

  get users() {
    return this.#users;
  }

  getUserNames() {
    const resArr = [];
    this.#users.forEach((arrayUser) => resArr.push(arrayUser.name));
    return resArr;
  }

  getUserIds() {
    const resArr = [];
    this.#users.forEach((arrayUser) => resArr.push(arrayUser.id));
    return resArr;
  }

  getUserNameById(inputId) {
    let res;
    this.#users.forEach((arrayUser) => {
      if (arrayUser.id === inputId) {
        res = arrayUser.name;
      }
    });

    return res;
  }
}

// examples

//Test Data
const user1 = new User("1", "Tom", "session-id-Tom");
const user2 = new User("2", "Sara", "session-id-Sara");
const user3 = new User("3", "Ben", "session-id-Ben");
const user4 = new User("4", "Marta", "session-id-Marta");
const usersArray = new UserRepository([user1, user2, user3, user4]);
console.log(usersArray);

console.log(usersArray.getUserNames());
console.log(usersArray.getUserIds());
console.log(usersArray.getUserNameById("1"));

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'
// //--------
// user.id = "12344";
// user1.name = "Mark";
// user.sessionId = "1344434444";
// console.log("--------------------");
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = "Bob"; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const url = "https://62e0099c98dd9c9df60c8089.mockapi.io/users";

export function getUsersList() {
  // put your code here
  return fetch(`https://62e0099c98dd9c9df60c8089.mockapi.io/users`).then(
    (usersList) => usersList.json()
  );
}

function getUserById(userId) {
  // put your code here
  return fetch(
    `https://62e0099c98dd9c9df60c8089.mockapi.io/users/${userId}`
  ).then((user) => user.json());
}

export function createUser(userData) {
  // put your code here
  return fetch("https://62e0099c98dd9c9df60c8089.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  // put your code here
  return fetch(`https://62e0099c98dd9c9df60c8089.mockapi.io/users/${userId}`, {
    method: "DELETE",
  });
}

export function updateUser(userId, userData) {
  // put you code here
  return fetch(`https://62e0099c98dd9c9df60c8089.mockapi.io/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// examples
// getUsersList().then((users) => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById("2").then((userData) => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

const newUserData = {
  email: "cool@email.com",
  firstName: "Iron",
  lastName: "Man",
  age: 42,
  id: 2,
};

// createUser(newUserData).then(() => {
//   console.log("User created");
// });

const updatedUserData = {
  email: "new@email.com",
  firstName: "John",
  lastName: "Doe",
  age: 17,
};

// updateUser("1", updatedUserData).then(() => {
//   console.log("User updated");
// });

// deleteUser("2").then(() => {
//   console.log("User deleted");
// });

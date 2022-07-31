const url = "https://api.github.com/users";

export const getUsersBlogs = async (users) => {
  const res = users.map((user) => {
    return fetch(`${url}/${user}`)
      .then((userData) => userData.json())
      .then((user) => user.blog);
  });
  return res;
};

// examples
// getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
//   console.log(linksList)
// ); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

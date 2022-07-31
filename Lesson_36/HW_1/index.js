const url = "https://api.github.com/users";

const fetchUser = async (user) => {
  const usersValue = await fetch(`https://api.github.com/users/${user}`);
  return usersValue.ok ? usersValue.json() : null;
};

export const getUsersBlogs = (users) => {
  const blogsArray = Promise.all(
    users.map((elem) => {
      return fetchUser(elem).then((user) => user.blog);
    })
  );
  return blogsArray;
};

// examples
// getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
//   console.log(linksList)
// ); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

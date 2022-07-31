const url = "https://api.github.com/users";

const getUsersBlogs = async (users) => {
  // put your code here
  const array = users.map(async (element) => {
    return await fetch(`${url}/${element}`);
  });
  console.log(array);
  return array;
  //   const userData = await fetch(`${url}/${users}`);
  //   console.log(userData);
};

// examples
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

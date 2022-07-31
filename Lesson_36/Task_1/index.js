const url = "https://api.github.com/users";

export const fetchUser = async (userId) => {
  // put your code here
  try {
    const response = await fetch(`${url}/${userId}`);
    if (!response.ok) {
      return null;
    }

    const userdata = await response.json();
    return userdata;
  } catch (e) {
    throw new Error("Failed to get user data");
  }
};

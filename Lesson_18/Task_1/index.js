const event = {
  message: "Welcome to the party!",
  guests: [
    {
      name: "Bob",
      age: "12",
      email: "user-email",
    },
    {
      name: "John",
      age: "32",
      email: "user-email",
    },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());

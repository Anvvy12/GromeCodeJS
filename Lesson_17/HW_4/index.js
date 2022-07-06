// put your code here

const user = {
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(name) {
    const nameArray = name.split(" ");
    [this.firstName, this.lastName] = nameArray;
  },
};

// test Data

user.setFullName("John Doe");
user.getFullName();
//----------------
user.setFullName("Eminem Bereminem");
user.getFullName();
//----------------
user.setFullName("Mark Klark");
user.getFullName();

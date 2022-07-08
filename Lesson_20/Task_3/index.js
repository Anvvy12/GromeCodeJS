class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    return (this.#balance += amount);
  }

  withdraw(amount) {
    if (amount < this.#balance) {
      return (this.#balance -= amount);
    }
    console.log("No enough funds");
    return;
  }
}
// Test data
const wallet1 = new Wallet();

console.log(wallet1.deposit(400));
console.log(wallet1.getBalance());
console.log(wallet1.withdraw(250));
console.log(wallet1.getBalance());
console.log(wallet1.withdraw(200));
console.log(wallet1.getBalance());

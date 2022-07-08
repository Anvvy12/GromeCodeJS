class Order {
  id = Math.random() * 100;
  price;
  dateCreated;
  isConfirmed = false;
  dateConfirmed;
  city;
  type;

  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }
  confirmOrder() {
    return (this.isConfirmed = true);
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    return false;
  }
}

const order1 = new Order(100000, "Lviv", "Selsl");
console.log(order1.confirmOrder());

console.log(order1.id);

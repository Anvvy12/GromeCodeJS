const vehicle = {
  name: "Agro",
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  __proto__: vehicle,
  startMachine() {
    console.log(`${this.name} lifring anchor up`);
    ship.move();
  },
  stopMachine() {
    console.log(`${this.name} lifring anchor down`);
    ship.stop();
  },
};
// test data
ship.startMachine();
ship.stopMachine();

vehicle.move();
vehicle.stop();

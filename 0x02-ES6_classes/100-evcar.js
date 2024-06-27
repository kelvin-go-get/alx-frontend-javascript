// 100-evcar.js
import Car from "./10-car.js";

const _range = Symbol("range");

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}

export default EVCar;

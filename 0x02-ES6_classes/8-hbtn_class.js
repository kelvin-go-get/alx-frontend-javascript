// 8-hbtn_class.js

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to return size when cast to Number
  valueOf() {
    return this._size;
  }

  // Method to return location when cast to String
  toString() {
    return this._location;
  }
}

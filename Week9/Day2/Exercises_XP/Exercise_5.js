class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

let d = new Labrador("Mitzie", "big");
console.log(d.size)
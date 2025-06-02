// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// Parent Class
class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Child Class
class Mammal extends Animal{
    sound(animalSound){
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// Creating Object
const farmerCow = new Mammal("Charlie", "Cow", "brown and white");

// Call sound method
console.log(farmerCow.sound("Mooo"));
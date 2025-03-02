let person1 = {
    name: "mesonne vantard",
    mass: 80,
    height:180,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

let person2 = {
    fullName: "Jane Smith",
    mass: 65,
    height: 1.68,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

function compareBMI(person1, person2) {
    let bmi1 = person1.calculateBMI();
    let bmi2 = person2.calculateBMI();
  
    if (bmi1 > bmi2) {
      console.log(`${person1.fullName} has the largest BMI: ${bmi1.toFixed(2)}`);
    } else if (bmi2 > bmi1) {
      console.log(`${person2.fullName} has the largest BMI: ${bmi2.toFixed(2)}`);
    } else {
      console.log(`Both ${person1.fullName} and ${person2.fullName} have the same BMI: ${bmi1.toFixed(2)}`);
    }
};


compareBMI(person1, person2);
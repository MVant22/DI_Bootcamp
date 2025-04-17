// Part 1
function weight(kg){
    return kg * 1000;
};

console.log(weight(4));

// Part 2
let weight2 = function (kg) {return kg * 1000};
console.log(weight2(4));

// Part 3
let weight3 = (kg) => {
    return kg * 1000;
};
console.log(weight3(4));
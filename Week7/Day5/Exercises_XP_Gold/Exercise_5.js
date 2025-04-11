const startLine = '     ||<- Start line';
const animals = ['🐢', '🐇'];

// Align emojis under the arrow using template strings and array method
const alignedAnimals = animals.map(animal => `${' '.repeat(7)}${animal}`);

console.log(startLine);
alignedAnimals.forEach(a => console.log(a));

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reduceArr = epic.reduce((acc, item) => acc + ' ' + item);

console.log(reduceArr)
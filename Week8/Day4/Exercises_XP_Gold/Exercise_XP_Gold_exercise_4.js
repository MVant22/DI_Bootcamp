const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const newArr = array.flat();
console.log(newArr)

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const secArr = greeting.map(words => words.join(" "));
secArr.toString();
console.log(secArr)

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const untrapped = trapped.flat(Infinity);
console.log(untrapped)
// function mergeWords(word){
//     const words = [];

//     function inner(nextWord){
//         if (nextWord === undefined){
//             return words.join(' ');
//         }
//         words.push(nextWord);
//         return inner;
//     }

//     words.push(word);
//     return inner;
// }

// console.log(mergeWords('Hello')('world')('from')('Earth')());


const mergeWords = (str) => (next) =>
    next === undefined ? str : mergeWords(`${str} ${next}`);

console.log(mergeWords('Hello')('world')('from')('Earth')())
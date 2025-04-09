const numbers = [1,2,2,3,4,4,5];

const uniqueNumbers = numbers.reduce((arr, curr) => {
    return arr.includes(curr) ? arr : [...arr,curr];
}, []);

console.log(uniqueNumbers)
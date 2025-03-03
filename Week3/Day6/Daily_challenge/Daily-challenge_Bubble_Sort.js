const numbers = [5,0,9,1,7,4,2,6,3,8];
let strnumbers1 = numbers.toString();

// let strnumbers2 = numbers.join('+');
let strnumbers2 = numbers.join(' ');
console.log(strnumbers2)

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++){
        // compare adjacent elements
        if (numbers[j] < numbers[j + 1]){
            // swap elemt if current one is smaller
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
    console.log(`${i + 1}: ${numbers}`);
}

console.log(`Sorted Array: ${numbers}`);
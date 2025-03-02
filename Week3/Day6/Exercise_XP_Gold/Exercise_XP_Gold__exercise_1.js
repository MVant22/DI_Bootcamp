let numbers = [123, 8409, 100053, 333333333, 7];

for (i=0;i<numbers.length; i++){
    if (numbers[i] % 3 == 0) {
        console.log(`The number ${numbers[i]} is divisible by 3`);
    }
    else {
        console.log(`The number ${numbers[i]} is not divisible by 3`);
    }
}
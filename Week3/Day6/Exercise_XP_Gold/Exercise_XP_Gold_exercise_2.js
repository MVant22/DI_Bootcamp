let age = [20,5,12,43,98,55];

let sum = 0;
let highest = 0;

for (let i=0; i<age.length; i++){
    sum += age[i];
    if (highest < age[i]){
        highest = age[i];   
    }
}


console.log(`The sum is ${sum}`);
console.log(`The highest number is ${highest}`);
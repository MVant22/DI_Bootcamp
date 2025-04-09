const numbers = [1,2,3,4,5];

function sum(num){
    let result = 0;
    for (let i = 0; i < num.length; i++){
        result += num[i];
    }
    console.log(result)
}
sum(numbers)


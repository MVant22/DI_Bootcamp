function biggestNumberInArray(arrayNumber){

    highest = 0;

    for (let i = 0; i < arrayNumber.length; i++){
        if (arrayNumber[i] >= highest){
            highest = arrayNumber[i];
        }
    }

    return highest;
}

console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]))
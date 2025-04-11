function reverse(arr){
    for (let i = 0; i < Math.floor(arr.length / 2); i++){
        let temps = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temps;
    };
    return arr;
}

console.log(reverse([1,2,3,4,5]));
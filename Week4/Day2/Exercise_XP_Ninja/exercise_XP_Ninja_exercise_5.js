function Unique(arr) {
    let arr1 = [];

    for (let i = 0; i < arr.length; i++){
        if (!arr1.includes(arr[i])){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(Unique([1,2,3,3,3,3,4,5]));
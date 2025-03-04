function isOmnipresent(arr, val) {
    for (let subArray of arr){
        if (!subArray.includes(val)){
            return false;
        }
    }
    return true
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))


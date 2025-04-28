function areAllTruthy(...args){
    return args.every(Boolean);
}

console.log(areAllTruthy(1, "hello", true, []));
console.log(areAllTruthy(1, "", true));
function changeEnough(itemPrice, amountOfChange) {

    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;

    for (let i = 0; i < amountOfChange.length; i++){
        totalChange += amountOfChange[i] * coinValues[i];
    }

    if(totalChange >= itemPrice){
        return true;
    }
    else {
        return false;
    };
};


console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
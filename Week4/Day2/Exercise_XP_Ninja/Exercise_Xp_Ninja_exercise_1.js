function even(){

    var num = Math.floor(Math.random() * 100) + 1; 

    if (num % 2 == 0){
        console.log(`${num} is divisble`)
    }
    else {
        console.log(` ${num} not divisble`)
    }
    
}

even()
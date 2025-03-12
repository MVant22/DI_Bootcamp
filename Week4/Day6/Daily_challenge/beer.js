number = parseInt(prompt("Enter the number to count down"));

function countdown(num){
    console.log(`We start the song at ${num}`)
    for (let i = 1; i <= num; i++){
        if (i > 1){
            console.log(`Take ${i} down, pass it around
                we have now ${num-i} bottles`);
        }else if (i == 1){
            console.log(`Take ${i} down, pass it around
                we have now ${num-i} bottle`);
        }
    }
    console.log(`${num-num} bottle of beer on the wall`);
};

countdown(number);
function isDivisible(divisor) {

    var output='';
    var divisbleBy;

    for (let i = 0; i <= 500;i++){
        if (i % 23 == 0){
            output += i + ' ';
        };

        var sum = 0;
        sum += i;
    };

    for (let i = 0; i <= 500; i++){
        if (i % divisor == 0){
            divisbleBy += i + ' ';
        }
    }
    
    console.log(output);
    console.log(`Sum : ${sum}`);

    console.log(divisbleBy)
    console.log(`The sum of the divisble by ${divisor} : ${sum}`)
};


isDivisible(45);
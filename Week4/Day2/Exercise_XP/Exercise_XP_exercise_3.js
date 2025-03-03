function isDivisible() {

    var output='';

    for (let i = 0; i <= 500;i++){
        if (i % 23 == 0){
            output += i + ' ';
        };

        var sum = 0;
        sum += i;
    };
    console.log(output);
    console.log(`Sum : ${sum}`);
};


isDivisible();
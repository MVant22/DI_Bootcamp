function Cap(str) {

    newletter = "";

    for (let i=0; i < str.length; i++){
        if (i % 2 == 0){
            newletter += str[i].toUpperCase(); 
        }
        else {
            newletter += str[i].toLowerCase();
        }
    }

    console.log(newletter);
}

Cap("abcdef");
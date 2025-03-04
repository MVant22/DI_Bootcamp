function swap(letters) {
    var user = "";

    for (var i=0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            user += letters[i].toUpperCase();
        }else{
            user += letters[i].toLowerCase();
        }
    }
    return user;
}

console.log(swap('The Quick Brown Fox'));
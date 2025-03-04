function abbrevName(fullname) {
    // Trim leading and trailing whitespace, split = split into array
    var abbrev = fullname.trim().split(" ");

    // checking if array contains more than one element
    if (abbrev.length > 1){
        // 
        return (abbrev[0] + " " + abbrev[1].charAt(0) + ".");
    }
    // if only one name is provided
    return abbrev[0];

}

console.log(abbrevName("Robin Sigh"))
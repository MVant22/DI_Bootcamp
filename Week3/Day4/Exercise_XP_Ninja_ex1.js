let olderBirthYear  = 2000;
let youngerBirthYear = 2020;


if (isNaN(olderBirthYear) || isNaN(youngerBirthYear)) {
    console.log("Invalid input. Please enter valid years.");
} 
else if (olderBirthYear >= youngerBirthYear) {
    console.log("The older person must be born before the younger one.");
} 
else {
    
    let x = 2 * youngerBirthYear - olderBirthYear;

    console.log("The year when the younger is exactly half the age of the older is: " + x);
}
function playTheGame(){
    // decide whether to play or not
    let user = confirm("Press a button! \n Either Ok or Cancel.");

    // user accepts to play
    if(user){
        // let the user enter a number 0 - 10
        let userInt = parseInt(prompt("Enter a number between 0 to 10: "));

        //check if user input is other dataype
        if (isNaN(userInt)){
            alert(`Sorry Not a number Goodbye`);
        }
        // check if input in range 0 - 10
        else if (userInt < 0 || userInt > 10){
            alert(`Sorry it's not a good number, Goodbye`);
        }
        //computer random input
        else{
            let computerNumber = Math.floor(Math.random() * 11);
            // call function to compare numbers
            compareNumbers(userInt,computerNumber);
        };
    }
    else{
        // user dont want to play
        alert(`No problem, Goodbye`);
    };
};

// function to compare numbers
function compareNumbers(userNumber,computerNumber){
    // declare attemps 
    let attempts = 0;

    // user have 3 attempts to guess computer number
    while (attempts < 3){
        // winner if  user number equals computer number
        if (userNumber === computerNumber) {
            alert(`WiNNER`);
            return;
        }
        // alert user number is bigger than computer number
        else if (userNumber > computerNumber){
            alert(`Your number is bigger then the computer’s, guess again`);
        }
        // alert user number is smaller than computer number
        else{
            alert(`Your number is smaller then the computer’s, guess again`);
        }

        // increase attempts each time user enters number
        attempts++;

        // check number of attempts
        if (attempts < 3){
            // ask user to input number
            userNumber = parseInt(prompt("Enter a number between 0 to 10: "));
            //check validity of user input
            if (isNaN(userNumber) || userNumber < 0 || userNumber > 10){
                alert("Invalid input.");
                return;
            }
            // if out of attempts game over
        }else{
            alert(`Out of attempts! computer number is ${computerNumber}`);
        }
    } 
}


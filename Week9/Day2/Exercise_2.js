// const displayStudentInfo = {first: "Elie", last:"Schoppik"};

// const {first, last} = displayStudentInfo

// console.log(`Your full name is ${first} ${last}`)

//
 function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
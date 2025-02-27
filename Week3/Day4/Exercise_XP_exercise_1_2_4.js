// Exercise 1

// let x = 5;
// let y = 2;

// if (x > y) {
//     console.log(x + " is greater than " + y)
// }else {
//     console.log(y + " is greater than" + x)
// }

// Exercise 2

// let newDog = 'Chihuahua';
// // const newDogArary = newDog.split("");
// // console.log(newDogArary.length)

// // console.log(newDog.toUpperCase());
// // console.log(newDog.toLowerCase());

// if (newDog == 'Chihuahua') {
//     console.log("I love " + newDog + " , it`s my favorite dog breed");
// }else {
//     console.log("i don`t care, i prefer cats")
// }


// Exercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0){
    console.log("no one is online");
} 
else if (users.length === 1){
    console.log(`${users[0]} is online`);
}
else if (users.length === 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
}
else {
    console.log(`${users[0]} and ${users.length - 1} more are online`)
}
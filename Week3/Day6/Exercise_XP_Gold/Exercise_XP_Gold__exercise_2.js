let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let student = prompt("Enter your name");

// for (let key in guestList){
//     console.log(key);
// }

if (student in guestList){
    console.log(`Hi! i'm ${guestList[student]}`);
}else {
    console.log("Hi! i'm a guest")
}
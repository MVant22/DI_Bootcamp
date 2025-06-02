const users = { 
    user1: 18273, 
    user2: 92833, 
    user3: 90315 
}

console.log(Object.entries(users));

// for (let key in users){
//     users[key] *= 2;
// }

const updatedUsers = Object.fromEntries(
    Object.entries(users).map(([key, value]) => [key, value *2])
);

console.log(updatedUsers);


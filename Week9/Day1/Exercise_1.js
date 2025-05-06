let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

console.log(Object.entries(myObj));

count = 1
for (let [key, value] of Object.entries(myObj)){
    console.log(`The ${count}# key is : ${key} The ${count}# value is: ${value}`)
    count++
}
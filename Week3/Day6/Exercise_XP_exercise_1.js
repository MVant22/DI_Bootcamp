const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);

people[2] = "Jason";

people.push("Mesonne");

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo"));

const newpeopleArray = people.slice(1)
// Why does it return -1 ? Using -1 ensures that the return value is never confused with a valid index.

last = people.pop();

console.log(newpeopleArray);

console.log(people);

console.log(last);


for (let i=0; i < people.length; i++){
    console.log( i + " " + people[i])
}


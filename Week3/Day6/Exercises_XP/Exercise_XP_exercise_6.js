const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

result = "";

for(let key in details){
    result += key + " " + details[key] + " ";
}

console.log(result.slice(0, -2));
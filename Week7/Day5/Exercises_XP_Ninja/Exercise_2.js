function chopString(str, size){
    const chunks = [];
    for (let i = 0; i < str.length; i++){
        chunks.push(str.slice(i, i + size));
    };
    return chunks;
}

console.log(chopString("developers", 2));
let colors = ["red", "blue", "yellow", "green"];

// for (i=0; i < colors.length; i++){
//     console.log(`My # ${i+1} is my choice ${colors[i]}`);
// }

for (i=0; i < colors.length; i++){
    if(i==0) {
        console.log(`My ${i+1}st is my choice ${colors[i]}`);
    }
    else{
        console.log(`My ${i+1}rd is my choice ${colors[i]}`);
    }
}
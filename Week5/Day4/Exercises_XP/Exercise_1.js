// Part 1
// let timeout;

// function myFunction(){
//     timeout = setTimeout(alertFunc, 2000);
// }

// function alertFunc(){
//     alert("Hello");
// }

// myFunction();

// Part 2 
// let timeout;

// function myFunction(){
//     timeout = setTimeout(alertFunc, 2000);
// }

// function alertFunc(){
//     const para = document.createElement("p");
//     para.textContent = "Hello World";
//     para.style.backgroundColor = "white";
//     para.style.color = "black"

//     document.getElementById("container").appendChild(para);
// }

// myFunction()

// Part 3
let count = 0;

function add(){
    const container = document.getElementById("container");

    if (count >= 5) {
        clearInterval(interval);
        console.log("⏹️ Interval stopped - 5 paragraphs reached.");
        return;
    }

    const para = document.createElement("p");
    para.textContent = "Hello World";
    container.appendChild(para)
    para.style.backgroundColor = "white";
    para.style.color = "black";
    count++;
}

const interval = setInterval(add, 2000);



// Declare a global variable named allBoldItems.
let allBoldItems

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold 
// items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems(){
    allBoldItems = document.getElementsByTagName("strong");
    console.log(allBoldItems)
}

getBoldItems();
// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight(){
    getBoldItems();
    for (const boldItem of allBoldItems){
        console.log(boldItem.style.color = "blue")
    }
}
highlight();
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault(){
    highlight();
    for (const blueItem of allBoldItems){
        console.log(blueItem.style.color = "black")
    }
}
returnItemsToDefault();

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 
// Look at this example
const para = document.querySelector("p");
para.addEventListener("mouseover", highlight);
para.addEventListener("mouseout", returnItemsToDefault);
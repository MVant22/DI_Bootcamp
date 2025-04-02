const box = document.getElementById("box");
const target = document.getElementById("target");

let offsetX, offsetY, isDragging = false;

box.addEventListener("mousedown", (event) =>{
    isDragging = true;

    offsetX = event.clientX - box.offsetLeft;
    offsetY = event.clientY - box.offsetTop;

    box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        box.style.left = event.clientX - offsetX + "px";
        box.style.top = event.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    box.style.cursor = "grab";

    // Check if the box is inside the target area
    const boxRect = box.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if (
        boxRect.left >= targetRect.left &&
        boxRect.top >= targetRect.top &&
        boxRect.right <= targetRect.right &&
        boxRect.bottom <= targetRect.bottom
    ) {
        box.style.left = targetRect.left + "px";
        box.style.top = targetRect.top + "px";
        console.log("Dropped inside the target!");
    }
});
function myMove(){
    const box = document.getElementById("animate");
    const container = document.getElementById("container");

    let position = 0;
    const containerWidth = container.clientWidth - box.clientWidth;

    const interval = setInterval(() => {
        if(position >= containerWidth){
            clearInterval(interval);
        }else{
            position++;
            box.style.left = position + "px";
        }
    }, 1);
}
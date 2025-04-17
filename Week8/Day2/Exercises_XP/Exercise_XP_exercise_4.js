(function (user){
    const userInfo = document.getElementById("user-info");

    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/30";
    img.alt = `${user}'s profile picture`;
    img.className = "rounded-circle me-2";

    const welcome = document.createElement("span");
    welcome.textContent = `Welcome, ${user}`;
    welcome.className = "text-white fw-bold";

    userInfo.appendChild(img)
    userInfo.appendChild(welcome);
    
})("John");
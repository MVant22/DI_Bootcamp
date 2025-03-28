const calBtn = document.getElementById("calculate");

function calculateTip(){
    let billAmount = parseFloat(document.getElementById("billamt").value);
    let serviceQuality = document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("peopleamt").value;
    let totalTip = document.getElementById("totalTip").value;
    let eachElement = document.getElementById("each");
    let tipElement = document.getElementById("tip");

    if (serviceQuality === 0 || isNaN(billAmount) || billAmount <= 0 || billAmount == ""){
        alert(`serviceQuality should be selected and billAmount should both be filled greater than 0`);
        return;
    }

    if (numberOfPeople == "" || numberOfPeople < 1){
        numberOfPeople.value || 1;
    }

    total = ( billAmount * serviceQuality ) / numberOfPeople;
    let roundedtotal = total.toFixed(2);


    tipElement.innerText = roundedtotal;
    eachElement.style.display = numberOfPeople > 1 ? "inline" : "none";

    totalTip.style.display = "block";

}

calBtn.addEventListener("click", calculateTip);

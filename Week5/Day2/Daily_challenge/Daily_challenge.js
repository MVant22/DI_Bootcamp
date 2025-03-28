let form = document.getElementById("libform");
let button = document.getElementById("lib-button");
const storySpan = document.getElementById('story');



function submitForm(e){
    e.preventDefault();
    let noun = document.getElementById("noun").value.trim();
    let adjective = document.getElementById("adjective").value.trim();
    let person = document.getElementById("person").value.trim();
    let verb = document.getElementById("verb").value.trim();
    let place = document.getElementById("place").value.trim();

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === ""){
        alert(`All field should be filled`);
        return;
    }else if(!/^[a-zA-Z]+$/.test(noun) || !/^[a-zA-Z]+$/.test(adjective) || !/^[a-zA-Z]+$/.test(person) || !/^[a-zA-Z]+$/.test(verb) || !/^[a-zA-Z]+$/.test(place)){
        alert(`All field should be letters`)
    }else{
        const story = `${person} went to the ${place} to ${verb} a ${adjective} ${noun}.`;
        storySpan.textContent = story;
    }
}

form.addEventListener("click", submitForm);
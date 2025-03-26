
let shoppingList = []; 

const root = document.getElementById("root");
root.innerHTML = ""; 


let text = document.createElement("input");
text.type = "text";
text.placeholder = "Enter item...";


let addItemBtn = document.createElement("button");
addItemBtn.textContent = "Add Item";


let clearAllBtn = document.createElement("button");
clearAllBtn.textContent = "Clear All";


let listContainer = document.createElement("ul");


root.append(text, addItemBtn, clearAllBtn, listContainer);

function addItem() {
    let item = text.value.trim(); 
    if (item) {
        shoppingList.push(item); 
        text.value = ""; 
        displayList(); 
    }
}

function displayList() {
    listContainer.innerHTML = ""; 
    shoppingList.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = item;

        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        removeBtn.onclick = () => removeItem(index);

        listItem.appendChild(removeBtn);
        listContainer.appendChild(listItem);
    });
}

function removeItem(index) {
    shoppingList.splice(index, 1); 
    displayList(); 
}

function clearAll() {
    shoppingList = []; 
    displayList(); 
}

addItemBtn.addEventListener("click", addItem);
clearAllBtn.addEventListener("click", clearAll);


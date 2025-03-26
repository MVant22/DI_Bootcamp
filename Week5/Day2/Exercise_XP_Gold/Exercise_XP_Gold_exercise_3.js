
let shoppingList = []; // Empty shopping list

const root = document.getElementById("root");
root.innerHTML = ""; // Clear root content

// Create input field
let text = document.createElement("input");
text.type = "text";
text.placeholder = "Enter item...";

// Create 'Add Item' button
let addItemBtn = document.createElement("button");
addItemBtn.textContent = "Add Item";

// Create 'Clear All' button
let clearAllBtn = document.createElement("button");
clearAllBtn.textContent = "Clear All";

// Create a list container
let listContainer = document.createElement("ul");

// Append elements to the root
root.append(text, addItemBtn, clearAllBtn, listContainer);

// Function to add an item
function addItem() {
    let item = text.value.trim(); // Get text input and remove whitespace
    if (item) {
        shoppingList.push(item); // Add to array
        text.value = ""; // Clear input field
        displayList(); // Update the list display
    }
}

// Function to display the shopping list
function displayList() {
    listContainer.innerHTML = ""; // Clear previous list items
    shoppingList.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = item;

        // Create a remove button for each item
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        removeBtn.onclick = () => removeItem(index);

        listItem.appendChild(removeBtn);
        listContainer.appendChild(listItem);
    });
}

// Function to remove a specific item
function removeItem(index) {
    shoppingList.splice(index, 1); // Remove item from array
    displayList(); // Refresh the list
}

// Function to clear all items
function clearAll() {
    shoppingList = []; // Empty the array
    displayList(); // Update the list
}

// Event Listeners
addItemBtn.addEventListener("click", addItem);
clearAllBtn.addEventListener("click", clearAll);


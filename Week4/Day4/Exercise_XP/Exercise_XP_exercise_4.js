let allBooks = [
    {
        title: "To kill a mockingbird",
        author: "Harper Lee",
        image: "https://example.com/to-kill-a-mockingbird.jpg",
        alreadyRead: true
    
    },

    {
        title: "1984",
        author: "George Orwell",
        image: "https://example.com/1984.jpg",
        alreadyRead: false
    
    },

    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://example.com/great-gatsby.jpg",
        alreadyRead: true
    
    },

    {
        title: "Moby Dick",
        author: "Herman Melville",
        image: "https://example.com/moby-dick.jpg",
        alreadyRead: false
    
    },
];

let bookContainer = document.querySelector(".listBooks");

// Create a table element
let table = document.createElement("table");
bookContainer.appendChild(table);

// Create the table header
let tableHeader = document.createElement("thead");
let headerRow = document.createElement("tr");
let headers = ["Book Title", "Author", "Image"];
headers.forEach(headerText => {
    let th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
});
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

// Create the table body
let tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// Loop through the allBooks array and create a row for each book
allBooks.forEach(book => {
    let row = document.createElement("tr");

    // If the book is already read, set the row's color to red
    if (book.alreadyRead) {
        row.style.color = "red";
    }

    // Create and append the book title and author cell
    let titleAuthorCell = document.createElement("td");
    titleAuthorCell.textContent = `${book.title} written by ${book.author}`;
    row.appendChild(titleAuthorCell);

    // Create and append the image cell with 100px width
    let imageCell = document.createElement("td");
    let image = document.createElement("img");
    image.src = book.image;
    image.style.width = "100px";
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    // Append the row to the table body
    tableBody.appendChild(row);
});
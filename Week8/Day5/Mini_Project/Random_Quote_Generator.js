const quotes = [
    {
        id: 0,
        author: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        likes: 0
    },
    {
        id: 1,
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
        likes: 0
    },
    {
        id: 2,
        author: "Mae West",
        quote: "You only live once, but if you do it right, once is enough.",
        likes: 0
    },
    {
        id: 3,
        author: "Marcus Aurelius",
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        likes: 0
    },
    {
        id: 4,
        author: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop.",
        likes: 0
    }
];

const section = document.getElementById("quote-section");
const button = document.getElementById("generate-quote");
const form = document.getElementById("quote-form");
const newQuoteInput = document.getElementById("new-quote");
const newAuthorInput = document.getElementById("new-author");
const infoOutput = document.getElementById("info-output");

// Extra buttons
const countCharsSpacesBtn = document.getElementById("count-chars-spaces");
const countCharsNoSpacesBtn = document.getElementById("count-chars-no-spaces");
const countWordsBtn = document.getElementById("count-words");
const likeButton = document.getElementById("like-quote");

let lastQuote = null;

// Generate random quote
button.addEventListener("click", () => {
    let randomQuote;

    do { 
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (lastQuote && randomQuote.id === lastQuote.id);

    lastQuote = randomQuote;

    displayQuote(randomQuote);
});

function displayQuote(quoteObj) {
    section.innerHTML = `
        <h2>"${quoteObj.quote}"</h2>
        <p>— ${quoteObj.author}</p>
        <p>Likes: ${quoteObj.likes}</p>
    `;
    infoOutput.textContent = ""; // Clear info output when a new quote is displayed
}

// Handle form submit to add a new quote
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const quoteText = newQuoteInput.value.trim();
    const authorText = newAuthorInput.value.trim();

    if (quoteText && authorText) {
        const newId = quotes.length;

        quotes.push({
            id: newId,
            author: authorText,
            quote: quoteText,
            likes: 0
        });

        alert("New quote added successfully!");

        newQuoteInput.value = "";
        newAuthorInput.value = "";
    } else {
        alert("Please fill in both the quote and the author.");
    }
});

// Count characters with spaces
countCharsSpacesBtn.addEventListener("click", () => {
    if (lastQuote) {
        infoOutput.textContent = `Characters (with spaces): ${lastQuote.quote.length}`;
    } else {
        infoOutput.textContent = "Please generate a quote first!";
    }
});

// Count characters without spaces
countCharsNoSpacesBtn.addEventListener("click", () => {
    if (lastQuote) {
        const charsNoSpaces = lastQuote.quote.replace(/\s/g, '').length;
        infoOutput.textContent = `Characters (without spaces): ${charsNoSpaces}`;
    } else {
        infoOutput.textContent = "Please generate a quote first!";
    }
});

// Count words
countWordsBtn.addEventListener("click", () => {
    if (lastQuote) {
        const wordCount = lastQuote.quote.trim().split(/\s+/).length;
        infoOutput.textContent = `Word count: ${wordCount}`;
    } else {
        infoOutput.textContent = "Please generate a quote first!";
    }
});

// Like a quote
likeButton.addEventListener("click", () => {
    if (lastQuote) {
        lastQuote.likes++;
        displayQuote(lastQuote);
    } else {
        infoOutput.textContent = "Please generate a quote first!";
    }
});

// Pre-defined array of quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" }
];

// Aesthetic background colors to switch between smoothly
const colors = ["#f5f5f5", "#e8f1f5", "#eaf5ed", "#fdf6ec", "#f5eff7", "#edf7f6"];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getQuote() {
    // Select a completely random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // Update text elements smoothly
    quoteText.innerText = selectedQuote.text;
    quoteAuthor.innerText = `— ${selectedQuote.author}`;
    
    // Rotate background colors dynamically
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
window.addEventListener("DOMContentLoaded", getQuote); // Display initial quote automatically

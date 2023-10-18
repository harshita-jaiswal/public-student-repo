// Add your code here
const elem = document.querySelector("input");
const paragraphDiv = document.getElementById("paragraph");

const handleKeyDown = (event) => {
    const wordToHighlight = event.target.value;
    const words = paragraphDiv.textContent.split(/\b/);
    const highlightedWords = [];
    words.forEach((word) => {
        if (word.toLowerCase() === wordToHighlight.toLowerCase()) {
            highlightedWords.push(`<span class="bg-warning">${word}</span>`);
        } else {
            highlightedWords.push(word);
        }
    });

    paragraphDiv.innerHTML = highlightedWords.join("");
};
elem.addEventListener("keydown", handleKeyDown);

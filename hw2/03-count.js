// Add your code here
const elem = document.querySelector("input");

const handleKeyDown = function handleInputKeyDown(event) {
    const paragraphDiv = document.getElementById("paragraph");
    const wordToHighlight = event.target.value;
    const text = paragraphDiv.innerHTML;
    const words = text.split(/\b/);
    const highlightedWords = words.map((word) => {
        if (word.toLowerCase() === wordToHighlight.toLowerCase()) {
            return `<span class="bg-warning">${word}</span>`;
        }
        return word;
    });

    paragraphDiv.innerHTML = highlightedWords.join("");
};
elem.addEventListener("keydown", handleKeyDown);

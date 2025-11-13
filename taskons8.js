let paragraph = "Learning JavaScript is fun and rewarding.";

// Step 1: Split paragraph into words
let words = paragraph.split(" "); // ["Learning", "JavaScript", "is", "fun", "and", "rewarding."]

// Step 2: Word count
let wordCount = words.length;

// Step 3: Character count (excluding spaces)
let charCount = paragraph.replaceAll(" ", "").length;

// Step 4: Find the longest word
let longestWord = "";
words.forEach(word => {
  // Remove punctuation for accuracy
  let cleanWord = word.replace(/[^a-zA-Z]/g, "");
  if (cleanWord.length > longestWord.length) {
    longestWord = cleanWord;
  }
});

console.log("📝 Word Count:", wordCount);
console.log("🔠 Character Count (no spaces):", charCount);
console.log("🏆 Longest Word:", longestWord);
let message = "This movie is stupid and boring.";

// Step 1: List of banned words
let bannedWords = ["stupid", "boring"];

// Step 2: Loop through each banned word
bannedWords.forEach(word => {
  // Step 3: Replace the word with asterisks of equal length
  let censor = "*".repeat(word.length);
  message = message.replaceAll(word, censor);
});

console.log(message);
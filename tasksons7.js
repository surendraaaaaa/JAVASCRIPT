let sentence = "Was it a car or a cat I saw";

// Step 1: Convert to lowercase
let cleanSentence = sentence
  .toLowerCase()                     // 1️⃣ Make all letters lowercase
  .replace(/[^a-z0-9]/g, "");        // 2️⃣ Remove spaces & punctuation

// Step 2: Reverse the cleaned string
let reversed = cleanSentence
  .split("")                         // 3️⃣ Convert to array of characters
  .reverse()                         // 4️⃣ Reverse the array
  .join("");                         // 5️⃣ Join back into a string

// Step 3: Compare both strings
if (cleanSentence === reversed) {
  console.log("✅ Palindrome");
} else {
  console.log("❌ Not a Palindrome");
}
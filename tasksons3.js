let sentence = "learn javascript in 30 days";

// Step-by-step conversion
let titleCaseSentence = sentence
  .split(" ") // 1️⃣ Split into words → ["learn", "javascript", "in", "30", "days"]
  .map(word => 
    word.charAt(0).toUpperCase() + word.slice(1) // 2️⃣ Capitalize first letter
  )
  .join(" "); // 3️⃣ Join back into a sentence

console.log(titleCaseSentence);
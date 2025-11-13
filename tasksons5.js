let title = "  Learn JavaScript in 30 Days  ";

// Step-by-step slug creation
let slug = title
  .trim()                // 1️⃣ Remove extra spaces at both ends
  .toLowerCase()         // 2️⃣ Convert to lowercase
  .replaceAll(" ", "-"); // 3️⃣ Replace spaces with hyphens

console.log(slug);
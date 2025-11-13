let email = "vamsi@gmail.com";

// Step 1: Validate email structure
if (email.includes("@") && email.endsWith(".com")) {
  console.log("✅ Valid Email");

  // Step 2: Extract username and domain
  let parts = email.split("@");     // ["vamsi", "gmail.com"]
  let username = parts[0];          // "vamsi"
  let domain = parts[1];            // "gmail.com"

  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("❌ Invalid Email");
}
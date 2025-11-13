let password = "Pass@123";

// Step 1: Check minimum length (8 characters)
let hasMinLength = password.length >= 8;

// Step 2: Check for at least one number
let hasNumber = password.match(/[0-9]/);

// Step 3: Check for at least one special character
let hasSpecialChar = password.match(/[^a-zA-Z0-9\s]/);

// Step 4: Combine all conditions
if (hasMinLength && hasNumber && hasSpecialChar) {
  console.log("✅ Strong Password");
} else {
  console.log("❌ Weak Password");
}
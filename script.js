function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

function savePassword() {
  const password = document.getElementById("password").value;
  if (password === "") {
    alert("No password to save!");
    return;
  }
  console.log("Password saved:", password); // You can expand this to save elsewhere
  alert("Password saved!");
}
function addPassword() {
  const manualInput = document.getElementById("manualPassword").value.trim();
  if (manualInput === "") {
    alert("Please enter a password to add.");
    return;
  }
  document.getElementById("password").value = manualInput;
  alert("Password added successfully!");
}
function toggleVisibility() {
  const passwordField = document.getElementById("password");
  const checkbox = document.getElementById("showPass");

  passwordField.type = checkbox.checked ? "text" : "password";
}


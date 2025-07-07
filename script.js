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

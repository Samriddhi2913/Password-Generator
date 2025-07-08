function generatePassword() {
  const length = parseInt(document.getElementById("lengthSlider").value);
  const includeUpper = document.getElementById("includeUpper").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) charset += "0123456789";
  if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  document.getElementById("password").value = password;
  evaluateStrength(password);
  runConfetti();
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  navigator.clipboard.writeText(passwordField.value).then(() => {
    alert("Copied to clipboard! 🎉");
  });
}

function toggleVisibility() {
  const passwordField = document.getElementById("password");
  passwordField.type = document.getElementById("showPass").checked ? "text" : "password";
}

function savePassword() {
  const name = document.getElementById("passwordName").value.trim();
  const password = document.getElementById("password").value;
  if (name && password) {
    alert(`Password "${name}" saved!`);
  } else {
    alert("Enter password and name before saving!");
  }
}

function addPassword() {
  const manualInput = document.getElementById("manualPassword").value.trim();
  if (manualInput === "") {
    alert("Please enter a password to add.");
    return;
  }
  document.getElementById("password").value = manualInput;
  evaluateStrength(manualInput);
  alert("Password added!");
}

function updateLength() {
  const length = document.getElementById("lengthSlider").value;
  document.getElementById("lengthValue").textContent = length;
}

function evaluateStrength(pwd) {
  const bar = document.getElementById("strengthBar");
  let score = 0;
  if (pwd.length > 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const colors = ["#dc3545", "#ffc107", "#17a2b8", "#28a745"];
  bar.style.backgroundColor = colors[score - 1] || "#eee";
  bar.style.width = (score / 4) * 100 + "%";
}

// 🎉 Simple Confetti
function runConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.speed;
      if (c.y > canvas.height) c.y = -c.size;
    });
    requestAnimationFrame(draw);
  }

  draw();
  setTimeout(() => cancelAnimationFrame(draw), 2000);
}

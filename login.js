function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('loginError');

  if(user === "student" && pass === "1234") {
    // Redirect to builder page
    window.location.href = "builder.html";
  } else {
    error.innerText = "Invalid username or password!";
  }
}

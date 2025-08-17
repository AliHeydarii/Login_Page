  function checkPass() {
    const correctUsername = "admin";
    const correctPassword = "12345";
    const usernameInput = document.getElementById("_user");
    const passwordInput = document.getElementById("_pass");

    if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
      alert("Welcome!");
      usernameInput.value = ""; 
      passwordInput.value = ""; 
    } else {
      alert("Incorrect username or password!");
    }
  }

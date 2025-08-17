  function checkPass() {
    const correctUsername = "admin";
    const correctPassword = "12345";
    const usernameInput = document.getElementById("_user");
    const passwordInput = document.getElementById("_pass");
    //reset//
      usernameInput.value = ""; 
      passwordInput.value = ""; 
    //reset//
    if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
      alert("Welcome!");
    } else {
      alert("Incorrect username or password!");
    }
  }

function checkPass() {
        const correctUsername = "admin";
        const correctPassword = "12345";

        const usernameInput = document.querySelector("._user").value;
        const passwordInput = document.querySelector("._pass").value;

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            alert("Welcome!");
        } else {
            alert("Incorrect username or password!");
            checkPass();
        }

    }

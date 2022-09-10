
function verifyPassword() {
    let pw = document.getElementById("Password").value;
    let confirmpw = document.getElementById("Confirm-Password").value;
    let message = document.getElementById("message")
    //check empty password field  
    if (pw == "") {
        message.innerHTML = "**Fill the password please!";
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        message.innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        message.innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } else if (pw != confirmpw) {

        alert("Passwords don't match");
    }

}  

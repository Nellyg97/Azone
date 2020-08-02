function validatePass() {
    var x = document.getElementById("input");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function checkBox() {
    const btn=document.getElementById("submit");
    const box=document.getElementById("terms");
    if (box.checked===true) {
        btn.disabled=false;
    } else  {
        btn.disabled=true;
    }
}

function validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailBox=document.getElementById("email");
    if (re.test(emailBox.value)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}
function validatePass() {
    var input = document.getElementById("input");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function checkBox() {
    const btn = document.getElementById("submit");
    const box = document.getElementById("terms");
    if (box.checked === true) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailBox = document.getElementById("email");
    if (re.test(emailBox.value)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}


function validatePsw {
    const password = document.getElementById("input")
    const form = document.getElementById("form")

        let messages = []
        if (password.value.length <= 6) {
            messages.push("Password must be longer than 6 characters.")
        }

        if (password.value.length >= 20) {
            messages.push("Password must be less than 20 characters")
        }

        if (password.value === "password") {
            messages.push("Password can't be password")
        }

        if (messages.length > 0) {
            e.preventDefault()
        }
    }
}

function validateRepeat {
    let pass=document.getElementById("input")
    let repeat=document.getElementById("psw-repeat")
    let messages=[]
    if (pass===repeat) {
        messages.push("")
    } else {
        messages.push("Your passwords don't match")
    }
}
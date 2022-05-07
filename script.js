const password = document.querySelector("#password").value
const confpassword = document.querySelector("#confpassword").value
const czyok = document.querySelector(".czyok")
const pass = document.getElementById("password")

if (password === confpassword) {
    pass.classList.add("invalid")
    czyok.innerHTML = "ok"
} else if (password != confpassword) {
    czyok.innerHTML = "nie ok"
} else {
    czyok.innerHTML = "error"
}

password.textContent.

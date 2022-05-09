let password = document.querySelector('#password')
let confpassword = document.querySelector('#confpassword')
let btn = document.querySelector('.submit-button')

btn.addEventListener('click', function() {
    let passvalue = password.value
    let confpassvalue = confpassword.value
    if (passvalue === confpassvalue) {
        password.setCustomValidity('')
        confpassword.setCustomValidity('')
    } else if (passvalue != confpassvalue) {
        password.classList.add('invalid')
        confpassword.classList.add('invalid')
        confpassword.setCustomValidity('passwords do not match')
    } else {
        console.log('error')
    }
})

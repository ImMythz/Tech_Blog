const { response } = require("express")

const loginForm = async function(event){
    event.preventDefault()

    const usernameVal = $("#exmapleFormControlInput1")
    const passwordVal = $("#inputPassword")

    const response = await fetch('./api/User/login', {
        method: 'POST',
        body: JSON.stringify({
            username = usernameVal.value,
            password = passwordVal.value
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Try again')
    }
}

documnet
    .querySelector('.login-form')
    .addEventListener('submit', loginForm)
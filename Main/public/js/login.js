const loginForm = async function(event){
    event.preventDefault()

    const usernameVal = $("#email-input")
    const passwordVal = $("#password-input")

    const response = await fetch('./api/user/login', {
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
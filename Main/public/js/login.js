// Handles logic for when user wants to login
const loginForm = async function(event){
    event.preventDefault()

    // Assigns user values from input fields
    const usernameVal = $("#email-input")
    const passwordVal = $("#password-input")

    // Checks user login values
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
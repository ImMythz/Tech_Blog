// Handles logic for when user wants to login
const loginForm = async function(event){
    event.preventDefault()

    // Assigns user values from input fields
    const usernameData = document.querySelector("#email-input")
    const passwordData = document.querySelector("#password-input")
    console.log(usernameData.value)
    console.log(passwordData.value)

    // Checks user login values
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameData.value,
            password: passwordData.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Try again')
    }
}

document.querySelector('.login-form');
document.addEventListener('submit', loginForm)

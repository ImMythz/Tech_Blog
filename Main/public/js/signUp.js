// Handles logic for when user wants to signup
const signUpForm = async function(event) {
    event.preventDefault()
    
    // Assigns user values from input fields
    const usernameData = document.querySelector("#inputUsername")
    const passwordData = document.querySelector("#inputPassword")

    console.log(usernameData.value)
    console.log(passwordData.value)

    // Creates a user
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameData.value,
            password: passwordData.value
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Try again')
    }
}

// Listens for user to hit submit to run logic above
document.querySelector('.signup-form')
document.addEventListener('submit', signUpForm)
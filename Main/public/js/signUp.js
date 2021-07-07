// Handles logic for when user wants to signup
const signUpForm = async function(event){
    event.preventDefault()
    
    // Assigns user values from input fields
    const usernameVal = $("#inputUsername")
    const passwordVal = $("#inputPassword")

    // Creates a user
    const response = await fetch('./api/user', {
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

// Listens for user to hit submit to run logic above
documnet
    .querySelector('.signup-form')
    .addEventListener('submit', signUpForm)
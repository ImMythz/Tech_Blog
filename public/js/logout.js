//  Handles logic for when the user clicks 'logout'
const logout = async (req, res) => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);
// Handles whether the user is logged in and if they user is not, redirects them to the login page
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login')
  } else {
    next()
  }
};
  
module.exports = withAuth
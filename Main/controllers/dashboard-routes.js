const router = require('express').Router()
const withAuth = require('../utils/auth')
const { Post } = require('../models')

// Get all posts the user created
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        })

        const posts = postData.map((post) => post.get({ plain: true }))

        res.render('user-posts', { layout: 'dashboard', posts , loggedIn: true });
    } catch (err) {
        res.redirect('/')
    }
})

// Allows user to create new post
router.get('/new-post', withAuth, async (req,res) => {
    res.render('new-post', { layout: 'dashboard', loggedIn: true })
})

module.exports = router;
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

// Allows user to edit post
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id)

        if (postData) {
            const post = postData.get({ plain: true })
            res.render('edit-post', { layout: 'dashboard', post, loggedIn: true });
        } else {
            res.status(404).end()
        }
    }   catch {
        res.redirect('login')
    }
})
module.exports = router;
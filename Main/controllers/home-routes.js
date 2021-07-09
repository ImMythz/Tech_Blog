const router = require('express').Router()
const { User, Post, Comment } = require('../models')

// Get all posts to display on the 'homepage'
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: [User],
        })

        const posts = postData.map((post) => post.get({ plain: true }))

        res.render('homepage', { posts , loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err)
    }
})

// Render signUp page if not loggedIn
router.get('/signUp', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
        return;

    }   else {
        res.render('signUp')
    }
})

// Renders login screen if user is not logged in
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;

    }   else {
        res.render('login')
    }
})

// Renders a single blog post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment, 
                    include: [User],
                },
            ],
        });

        if (postData) {
            const post = postData.get({ plain: true })
            res.render('view-post', { post, loggedIn: req.session.loggedIn})
        } else {
            res.status(404).end()
        }
    }   catch (err){
        res.status(500).json(err)
    }
})

module.exports = router;

const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    const body = req.body

    try {
        const newPost = await Post.create({ ...body, userId: req.session.userId, loggedIn: true})
        res.json(newPost)

    }   catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
    }   catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router
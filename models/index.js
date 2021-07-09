// Importing models
const Comment = require('./comment')
const Post = require('./post')
const User = require ('./user')

// Model relationships
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

// Exporting model relationships
module.exports = {
    Comment, 
    Post,
    User
}
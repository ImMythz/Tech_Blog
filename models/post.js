const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

// Declaring and defining Post model
class Post extends Model {}

Post.init(
    {
        title: DataTypes.STRING, 
        body: DataTypes.STRING
    },
    {
        sequelize
    }
)

// Exporting Post model
module.exports = Post

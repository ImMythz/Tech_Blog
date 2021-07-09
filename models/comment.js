const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

// Declaring and defining Comment model
class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
)

// Exporting Comment model
module.exports = Comment
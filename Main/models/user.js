const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

// Declaring and defining a User model
class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        sequelize
    }
)

// Exporting User model
module.exports = User
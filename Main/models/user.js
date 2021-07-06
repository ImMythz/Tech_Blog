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
        // Hooks to hash User passwords
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password)
                return newUserData 
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password)
                return updatedUserData
            }
        },
        sequelize,
        timestamps: false, 
        freezeTableName: true, 
        underscored: true,
        modelName: 'User'
    }
)

// Exporting User model
module.exports = User
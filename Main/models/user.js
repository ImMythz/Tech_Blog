const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class User extends Model {}

module.exports = User
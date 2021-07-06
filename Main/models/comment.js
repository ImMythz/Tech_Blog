const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class Comment extends Model {}

module.exports = Comment
const express = require('express')
const session = require('express-session')


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');


module.require = sequelize
const Sequelize = require('sequelize');
const dbConfig = require("./db.config.js");
require('dotenv').config();

let sequelize;

// Ingests .env info 
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      host: dbConfig.HOST,
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

const db = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(db, username, password, { host: dbhost, dialect: dialect });

module.exports = sequelize;
const Sequelize = require('sequelize');
const sequelizeConnection = require('../helpers/database');

const Category = sequelizeConnection.define('category', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Category;

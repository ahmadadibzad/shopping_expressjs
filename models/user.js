const Sequelize = require('sequelize');
const sequelizeConnection = require('../helpers/database');

const User = sequelizeConnection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resetToken: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = User;

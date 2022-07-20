const Sequelize = require('sequelize');
const sequelizeConnection = require('../helpers/database');

const Order = sequelizeConnection.define('order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Order;

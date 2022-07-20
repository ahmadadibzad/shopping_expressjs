const DataTypes = require('sequelize');
const sequelizeConnection = require('../helpers/database');

const Cart = sequelizeConnection.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

module.exports = Cart;

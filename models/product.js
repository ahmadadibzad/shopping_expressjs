const Sequelize = require('sequelize');
const sequelizeConnection = require('../helpers/database');

const Product = sequelizeConnection.define('product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

module.exports = Product;

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PGLINK); // TODO: In main

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parent_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    timestamps: false
});

module.export = Category;
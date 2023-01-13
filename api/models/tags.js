const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);


const Tag = sequelize.define('Tag', {
    photo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    }

}, {
    timestamps: false
});

module.exports = Tag;
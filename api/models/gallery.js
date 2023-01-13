const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PGLINK);

const Gallery = sequelize.define('Gallery', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    gallery_owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }

}, {
    timestamps: false,
    freezeTableName: true
});


module.export = Gallery;
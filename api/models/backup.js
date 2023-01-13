const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PGLINK);

const Backup = sequelize.define('Backup', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    gallery: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    timestamps: false
});

module.export = Backup;
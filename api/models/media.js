const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(process.env.PGLINK);


const Media = sequelize.define('Media', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    creation_date: {
        type: DataTypes.DATA,
        allowNull: false
    },
    is_av: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    backup_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    timestamps: false,
    freezeTableName: true
});


module.export = Media;
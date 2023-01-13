const { DataTypes } = require('sequelize');



module.exports = (sequelize) => { 
    sequelize.define('Media', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    is_av: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    backup_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: false,
    freezeTableName: true
});


}
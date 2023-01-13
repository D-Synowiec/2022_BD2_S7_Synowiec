const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { 
    sequelize.define('Media_Dictonary', {
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
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false,
    freezeTableName: true
});

}
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Backup', {
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

}
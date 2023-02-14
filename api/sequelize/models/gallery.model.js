const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Gallery', {
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
        type: DataTypes.STRING(100),
        allowNull: false
    }

}, {
    timestamps: false,
    freezeTableName: true
});


}
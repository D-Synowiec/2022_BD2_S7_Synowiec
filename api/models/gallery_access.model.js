const { DataTypes } = require('sequelize');



module.exports = (sequelize) => { 
    sequelize.define('Gallery_Access', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gallery: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    timestamps: false,
    freezeTableName: true
});

}
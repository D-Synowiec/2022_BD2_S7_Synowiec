const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('Tag', {
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

}
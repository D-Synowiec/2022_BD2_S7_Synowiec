const { DataTypes } = require('sequelize');



module.exports = (sequelize) => { 
    sequelize.define('Categorized_Photo', {
    photoId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }

}, {
    timestamps: false
});

}
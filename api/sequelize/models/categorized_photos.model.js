const { DataTypes } = require('sequelize');



module.exports = (sequelize) => { 
    sequelize.define('Categorized_Photo', {
    photo: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }

}, {
    timestamps: false
});

}
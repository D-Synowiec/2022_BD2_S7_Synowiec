const { DataTypes } = require('sequelize');



module.exports = (sequelize) => { 
    sequelize.define('Categorized_Gallery', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
    // photoId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,

    // },
    // categoryId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,

    // }

}, {
    timestamps: false
});

}
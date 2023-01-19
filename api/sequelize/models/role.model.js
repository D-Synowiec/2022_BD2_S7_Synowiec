const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING(25)
    }

}, {
    timestamps: false
});

}
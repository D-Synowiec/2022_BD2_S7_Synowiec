const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    primary_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    second_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(65),
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING(320),
        allowNull: false,
    },
    tokens: {
        type: DataTypes.STRING(400),
    }

}, {
    timestamps: false
});

}
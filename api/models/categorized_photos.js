const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PGLINK);


const Categorized_Photo = sequelize.define('Categorized_Photo', {
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

module.export = Categorized_Photo;
const { Sequelize, DataTypes } = require('sequelize');



const sequelize = new Sequelize(process.env.PGLINK);


const Gallery_Access = sequelize.define('Gallery_Access', {
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


module.export = Gallery_Access;
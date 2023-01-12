const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const User = require('./user')

const sequelize = new Sequelize(process.env.PGLINK);


const Gallery = sequelize.define('Gallery', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    gallery_owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key: 'id'
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});


async function test() {
    try {
      const users = await Gallery.findAll()
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
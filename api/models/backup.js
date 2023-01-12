const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);


const Backup = sequelize.define('Backup', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    gallery: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references:{
            model: gallery,
            key: 'id'
        }
    }

}, {
    timestamps: false
});


async function test() {
    try {
      const users = await Backup.findAll()
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);


const x = sequelize.define('Media_Dictonary', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false
});


async function test() {
    try {
      const users = await User.findAll()
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
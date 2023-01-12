const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


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

// Default asks for id, need to do custom query
async function test() {
    try {
      const users = await Categorized_Photo.findAll()
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
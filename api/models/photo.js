const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);


const x = sequelize.define('Photo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resolution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extension: {
        type: DataTypes.STRING,
        allowNull: false
    },
    galleries: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    photo_file: {
        type: DataTypes.BLOB,
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
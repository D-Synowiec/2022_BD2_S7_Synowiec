const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);


const User = sequelize.define('User', {
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
    login: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING(320),
        allowNull: false,
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tokens: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }

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
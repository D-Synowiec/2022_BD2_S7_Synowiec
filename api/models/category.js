const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.PGLINK);
const Category = sequelize.define('Category', {
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
    parent_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Category,
            key: 'id'
        }
    }

}, {
    timestamps: false
});

async function test() {
    try {
      const users = await Category.findAll()
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
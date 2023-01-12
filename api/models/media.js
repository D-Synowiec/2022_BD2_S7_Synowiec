const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.PGLINK);


const Media = sequelize.define('Media', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references:{
            model: Media_Dictonary,
            key: 'id'
        }
    },
    creation_date: {
        type: DataTypes.DATA,
        allowNull: false
    },
    is_av: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    backup_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references:{
            model: Backup,
            key: 'id'
        }
    },

}, {
    timestamps: false
});


async function test() {
    try {
      const users = await Media.findAll()
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();